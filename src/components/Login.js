import React, { useState } from "react";
import "../css/Login.css";
import { useDispatch, useSelector } from "react-redux";
import { login, adduser } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleToggleMode = () => {
    setIsRegistering(!isRegistering);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isRegistering) {
      dispatch(
        adduser({
          id: user.users.length + 1,
          displayname: email,
          email: email,
          password: password,
        })
      );

      setIsRegistering(false);
    } else {
      console.log("Login mode");
      try {
        const userTryingtoLogIn = user.users.filter(
          (item) => item.email === email
        )[0];
        console.log("trying to login", userTryingtoLogIn);
        userTryingtoLogIn &&
          userTryingtoLogIn.password === password &&
          dispatch(login({ user: userTryingtoLogIn, isAuthenticated: true }));
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }

      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className='login-page'>
      <h1>{isRegistering ? "Create an Account" : "Log In to Quora"}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type='email' value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <input
            type='password'
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type='submit'>{isRegistering ? "Register" : "Login"}</button>
        <p>
          {isRegistering
            ? "Already have an account?"
            : "Don't have an account?"}
          <button type='button' onClick={handleToggleMode}>
            {isRegistering ? "Log in" : "Register"}
          </button>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
