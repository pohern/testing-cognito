import React from 'react';
import { Account } from './components/Accounts'
import Signup from './components/SignUp'
import Login from './components/Login'
import Status from './components/Status';

function App() {
  return (
    <Account>
      <Status />
      <Signup />
      <Login />
    </Account>
  );
}

export default App;
