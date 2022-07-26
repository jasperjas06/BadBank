import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useContext } from "react";
import userContext from "../context";
import "./pagestyle.css";

export default function Signin() {
  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let people = useContext(userContext);
  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      alert("Please enter " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (label === "password" && password.length < 8) {
      setStatus("Error: " + label);
      alert("Please enter minimum 8 characters");
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    if (label === "name") {
      if (!isNaN(field)) {
        setStatus("Error: " + label);
        alert("Please Enter Valid Name");
        setTimeout(() => setStatus(""), 3000);
        return false;
      }
    }
    if (label === "email") {
      //setStatus("Error: " + label);
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(email)) {
        alert("Please enter a valid email address");
        setTimeout(() => setStatus(""), 3000);
        return false;
      }
    }
    return true;
  }
  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    people.users.push({ name, email, password, balance: 0 });
    setShow(false);
    alert("Successfully Created");
  }
  function refreshForm() {
    setName("");
    setEmail("");
    setPassword("");
  }
  return (
    <>
    <h1>Create Account</h1>
    <div class="signin">
      <div  id="form">
        {show ? (
          <>
            <div className="row ">
              <form>
                <div className="form-group">
                  <label class="signtext">Name</label><br/>
                  <input type="text"
                  class="inputsign"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.currentTarget.value)}
                  />
                </div><br />
                <div className="form-group">
                  <label class="signtext">Email address</label><br/>
                  <input
                    type="email"
                    class="inputsign"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                  {/* <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small> */}
                </div>
                <br />
                <div className="form-group">
                  <label class="signtext">Password</label><br/>
                  <input
                    type="password"
                    class="inputsign"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                </div>
                <br  />
                <button
                  type="submit"
                  class="button-33"
                  disabled={!name && !email && !password}
                  onClick={handleCreate}
                >
                  Submit
                </button>
              </form>
            </div>
          </>
        ) : (
          <>
            <h5>Successfully Account Created</h5>
            <button
              type="submit"
              class="button-33"
              onClick={refreshForm}
            >
              Add another account
            </button>
          </>
        )}
      </div>
      </div>
    </>
  );
}
