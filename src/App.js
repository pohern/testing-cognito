import React from 'react';
import { Account } from './components/Accounts'
import Signup from './components/SignUp'
import Login from './components/Login'

function App() {
  return (
    <Account>
      <Signup />
      <Login />
    </Account>
  );
}

export default App;
