import { Container, Row } from "react-bootstrap";
import { useState, useContext } from "react";
import UserContext from "../context";
import "./pagestyle.css";

export default function Deposit() {
  let people = useContext(UserContext);
  const [deposit, setDeposit] = useState("");
  const [status, setStatus] = useState("");
  var leng = people.users.length;
  var balAnce = people.users[leng - 1].balance;
  const [availablebal, setAvailableBal] = useState(balAnce);
  const [show, setShow] = useState(true);

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
    return true;
  }
  function handleCreate() {
    if (!validate(deposit, "deposit")) return;
    var Money = balAnce + parseInt(deposit);
    setAvailableBal(Money);
    people.users[leng - 1].balance = Money;
    setShow(false);
    alert("Successfully Deposited ₹" + deposit);
  }

  function refrushForm() {
    setDeposit("");
    setShow(true);
  }
  return (
    <>
<h1>Deposit</h1>
      <Container>
        
        <Row>
          {show ? (
            <form class="depo_form">
              <button
                type="submit"
                class="button-33"
                onClick={handleCreate}
              >
                Deposit
              </button>
              <div>
                <br/>
                <input class="input"
                  placeholder="Enter Amount to be deposited"
                  value={deposit}
                  onChange={(e) => setDeposit(e.currentTarget.value)}
                />
                <div class="avai">
          <h1 class="v10">Balance : ₹ {availablebal}</h1>
        </div>
              </div>
              
            </form>
          ) : (
            <>
              <h5>Deposited Successfully </h5>
              <br />
              <br />
              <button
                type="submit"
                class="button-33"
                onClick={refrushForm}
              >
                Add Another Deposit
              </button>
            </>
          )}
        </Row>
        
      </Container>
    </>
  );
}
