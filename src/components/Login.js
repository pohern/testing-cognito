import React, { useState, useContext } from "react";
import { AccountContext } from "./Accounts";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (e) => {
    e.preventDefault();
    authenticate(email, password)
      .then((data) => {
        console.log("Logged In!", data);
      })
      .catch((err) => {
        console.log("Failed to login!", err);
      });
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default App;
