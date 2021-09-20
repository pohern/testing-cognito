import React from 'react';
import { Account } from './components/Accounts'
import Signup from './components/SignUp'
import Login from './components/Login'
import Status from './components/Status';
import Settings from './components/Settings';

function App() {
  return (
    <Account>
      <Status />
      <Signup />
      <Login />
      <Settings />
    </Account>
  );
}

export default App;
