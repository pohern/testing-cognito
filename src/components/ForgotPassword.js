import React, { useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import Pool from "../UserPool";

const ForgotPassword = () => {
  const [stage, setStage] = useState(1); // 1 = email stage, 2 = code stage
  const [email, setEmail] = useState("");
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const getUser = () => {
    return new CognitoUser({
      Username: email.toLowerCase(),
      Pool,
    });
  };
  const sendCode = (e) => {
    e.preventDefault();
    getUser().forgotPassword({
      onSuccess: (data) => {
        console.log("onSuccess:", data);
      },
      onFailure: (err) => {
        console.log("onFailure:", err);
      },
      inputVerificationCode: (data) => {
        console.log("Input Code:", data);
        setStage(2);
      },
    });
  };
  const resetPassword = (e) => {
    e.preventDefault();
    if (password !== confirmPassword){
        console.error('Passwords are not the same')
        return;
    }
    getUser().confirmPassword(code, password, {
      onSuccess: (data) => {
        console.log("onSuccess:", data);
      },
      onFailure: (err) => {
        console.log("onFailure:", err);
      }
    });
  };
  return (
    <div>
      {stage === 1 && (
        <form onSubmit={sendCode}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
          <button type='submit'>Send Verification Code</button>
        </form>
      )}
      {stage === 2 && (
          <form onSubmit={resetPassword}>
            <input value={code} onChange={e => setCode(e.target.value)}/>
            <input value={password} onChange={e => setPassword(e.target.value)}/>
            <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
            <button type='submit'>Reset Password</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
