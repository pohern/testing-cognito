import React, { useEffect, useContext, useState } from "react";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { AccountContext } from "./Accounts";
const Attributes = () => {
  const [plan, setPlan] = useState("");
  const { getSession } = useContext(AccountContext);
  useEffect(() => {
    //Todo: Fetch the current plan from cognito
    getSession().then((data) => {
        console.log('DATA:', data)
        setPlan(data['custom:plan']);
    })
  });

  const onSubmit = (e) => {
    e.preventDefault();
    //Todo: Update the plan on Cognito
    getSession().then(({ user }) => {
      const attributes = [
        new CognitoUserAttribute({ Name: "custom:plan", Value: plan }),
      ];
      user.updateAttributes(attributes, (err, result) => {
        if (err) console.error(err);
        console.log(result);
      });
    });
  };
  return (
    <div>
      <h1>Update your plan:</h1>
      <form onSubmit={onSubmit}>
        <input value={plan} onChange={(e) => setPlan(e.target.value)} />
        <button type='submit'>Change Plan</button>
      </form>
    </div>
  );
};

export default Attributes;
