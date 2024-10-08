import { useState } from "react";

import Header from "./components/Header";
import Button from "./components/Button";
import Input from "./components/Input";


let log = {
  email:    '',
  password: '',
  valid:    [true, true]
}

function App() {
  const [loggedUser, setLoggedUser] = useState(log);


  function changeLoggedUser(event) {
    const { name, value } = event.target;

    setLoggedUser(prevLog => {

      return {...prevLog, [name]: value }
    })
  }

  function logUser() {

    setLoggedUser(prevLog => {
      const { email, password } = prevLog;

      return {...prevLog, valid: [(email !== ''), (password !== '')]}
    })
  }

  return <>
    <Header />
    <div id="auth-inputs" className="w-full max-w-xl m-10 mx-auto p-9 rounded shadow-md bg-gradient-to-b from-stone-700 to-stone-800">
      <Input 
        label='Email Address'
        type='text' name='email' 
        value={loggedUser.email} valid={loggedUser.valid[0]} 
        onChange={changeLoggedUser}
       />
      <Input 
        label='Password' 
        type='password' name='password' 
        value={loggedUser.password} valid={loggedUser.valid[1]}
        onChange={changeLoggedUser}
       />
      <div className="flex justify-end gap-4">
        <button className="content-center text-stone-500 hover:text-amber-500">Create a new account</button>
        <Button onClick={logUser}>Sign In</Button> 
      </div>
    </div>
  </>
}

export default App
