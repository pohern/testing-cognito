import React, { useState, useContext } from "react";
import {
  CognitoUserAttribute,
} from "amazon-cognito-identity-js";
import { AccountContext } from "./Accounts";

const ChangePassword = () => {
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const { authenticate, getSession } = useContext(AccountContext);
  const onSubmit = (e) => {
    e.preventDefault();
    getSession().then(({ user, email }) => {
      authenticate(email, password).then(() => {
        const attributes = [
          new CognitoUserAttribute({ Name: "email", Value: newEmail }),
        ];
        user.updateAttributes(attributes, (err, results) => {
            if (err) console.log(err);
            console.log(results)
        })
      });
    });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
        <input value={password} type='password' onChange={(e) => setPassword(e.target.value)} />
        <button type='submit'>Change Email</button>
      </form>
    </div>
  );
};

export default ChangePassword;
