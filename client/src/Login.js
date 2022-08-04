import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLogin] = useState(false);
  const [loginError, setError] = useState(false);

  const handleLogin = (action) => {
    action.preventDefault();
    if (!email || !password) {
      alert("error. enter email and password");
    } else {
      axios
        .post("/api/session", {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
          console.log("successfully logged in");
          setLogin(true);
        })
        .catch((err) => {
          if (err.response.data.message === "invalid email or password") {
            console.log("fail");
            setError(true);
          }
        });
    }
  };
  return (
    <div>
      <h3>login</h3>
      <form onSubmit={handleLogin}>
        <input type="text" id="email" name="email" placeholder="Email" autoComplete="off" />
        <input type="password" id="password" name="password" placeholder="Password" />
        <br />
        <button id="login-btn" name="login">
          Log in
        </button>
      </form>
    </div>
  );
}
