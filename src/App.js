import React from 'react';
import { Account } from './components/Accounts'
import Signup from './components/SignUp'
import Login from './components/Login'
import Status from './components/Status';
import Settings from './components/Settings';
import ForgotPassword from './components/ForgotPassword';
import Attributes from './components/Attributes';

function App() {
  return (
    <Account>
      <Status />
      <Signup />
      <Login />
      <ForgotPassword />
      <Settings />
      <Attributes />
    </Account>
  );
}

export default App;
