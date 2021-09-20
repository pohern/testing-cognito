import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "../UserPool";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    const user = new CognitoUser({
        Username: email,
        Pool: UserPool,
    })
    const authDetails = new AuthenticationDetails({
        Username: email,
        Password: password
    })

    user.authenticateUser(authDetails, {
        onSuccess: data => {
            console.log('onSuccess: ', data)
        },
        onFailure: err => {
            console.log('onFailure: ', err)
        },
        newPasswordRequired: data => {
            console.log('newPasswordRequired: ', data)
        }
    })
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