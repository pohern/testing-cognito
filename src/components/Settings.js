import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Accounts";
import ChangePassword from "./ChangePassword";
const Settings = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const { getSession } = useContext(AccountContext);
  useEffect(() => {
    getSession().then((result) => {
      setLoggedIn(true);
    });
  }, []);
  return (
    <div>
      {loggedIn && (
        <>
          <h1>Settings</h1>
          <ChangePassword />
        </>
      )}
    </div>
  );
};

export default Settings;
