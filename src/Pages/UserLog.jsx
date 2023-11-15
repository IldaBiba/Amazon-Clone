import { auth } from "../Util/firebase";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

function UserLog() {
  const navigate = useNavigate();
  const [{ isUser, Username }, dispatch] = useStateValue();
  const [email, updateemail] = useState("");
  const [password, updatePassword] = useState("");
  const [signUp, setSignUp] = useState(false);
  const [username, updateUsername] = useState("");

  function ChangeForm() {
    if (signUp) setSignUp(false);
    else setSignUp(true);
  }
  function handleUsername(event) {
    updateUsername(event.target.value);
  }
  function handleEmail(event) {
    console.log(email, "e para");
    updateemail(event.target.value);
    console.log(email, "e dyta");
  }
  function handlePassword(event) {
    console.log(password);
    updatePassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (email == "" || password == "" || password.length < 8) {
      navigate("/Sign-In");
      console.log("para se te futet");
    } else {
      if (signUp) {
        console.log("u fut");
        auth
          .createUserWithEmailAndPassword(email, password)
          .then(
            dispatch({
              type: "User_Sign_In",
            })
          )
          .catch((error) => {
            alert(error.message);
          })
          .then(navigate(`/`));
      } else {
        auth
          .signInWithEmailAndPassword(email, password)
          .then(
            dispatch({
              type: "User_Sign_In",
            })
          )
          .catch((error) => {
            alert(error.message);
          })
          .then(console.log(isUser, "hi"))
          .then(navigate(`/`));
      }
    }
    updateemail("");
    updatePassword("");
    updateUsername("");
  }
  return (
    <>
      <div className="Log flex">
        <Link to="/">
          <div className="">
            <img src="./amazon-logo.png" alt="" />
          </div>
        </Link>
        <form className="flex">
          <h3>{!signUp ? "Sign In" : "Sign Up"}</h3>
          {signUp && (
            <div className="flex username">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                value={username}
                onChange={handleUsername}
              />
            </div>
          )}
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmail}
          />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePassword}
          />
          <Button
            type="submit"
            className="btn btn-margin"
            onClick={handleSubmit}
          >
            {!signUp ? "Sign In" : "Sign Up"}
          </Button>
        </form>
        <hr />
        <div>
          {
            <div>
              <div>New To Amazon</div>
              <button className="btn" onClick={ChangeForm}>
                {!signUp ? <div>Create a new Account</div> : <div>Sign In</div>}
              </button>
            </div>
          }
        </div>
      </div>
    </>
  );
}

export default UserLog;
