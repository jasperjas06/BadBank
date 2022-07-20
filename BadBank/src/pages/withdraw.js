import { Container, Row } from "react-bootstrap";
import { useState, useContext } from "react";
import UserContext from "../context";
import "./pagestyle.css";

export default function Withdraw() {
  let people = useContext(UserContext);
  const [withdraw, setWithdraw] = useState("");
  const [status, setStatus] = useState("");
  const [show, setShow] = useState(true);
  var leng = people.users.length;
  var balAnce = people.users[leng - 1].balance;
  const [availablebal, setAvailableBal] = useState(balAnce);

  // form validation
  function validate(field, label) {
    if (isNaN(field)) {
      setStatus("Error: " + label);
      alert("Please Enter Valid Number");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (parseInt(field) <= 0) {
      setStatus("Error: " + label);
      alert(" Please Enter a Value greater than zero");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (parseInt(field) >= balAnce) {
      setStatus("Error: " + label);
      alert("Sorry, you don't have enough cash to Withdraw");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(withdraw, "withdraw")) return;
    var Money = balAnce - parseInt(withdraw);
    setAvailableBal(Money);
    people.users[leng - 1].balance = Money;
    setShow(false);
    alert("Successfully Withdraw ₹" + withdraw);
  }
  function refrushForm() {
    setWithdraw("");
    setShow(true);
  }
  return (
    <>
    <h1>Withdraw</h1>
      <Container>
        
        <Row>
          {show ? (
            <form class="depo_form">
              
              <button
                type="submit"
                class="button-33"
                disabled={!withdraw}
                onClick={handleCreate}
              >
                Withdraw
              </button>
              
              <div >
              <br/>
                <input class="input"
                
                  placeholder="Enter Amount to withdraw"
                  value={withdraw}
                  onChange={(e) => setWithdraw(e.currentTarget.value)}
                />
                <div class="avai">
          <h1 class="v10">Balance : ₹ {availablebal} </h1>
        </div>
              </div>
              
            </form>
          ) : (
            <>
              <h5>Transaction Successfully </h5>
              <br />
              <br />
              <button
                type="submit"
                class="button-33"
                onClick={refrushForm}
              >
                Add Another Withdraw
              </button>
            </>
          )}
        </Row>
        
      </Container>
    </>
  );
}
