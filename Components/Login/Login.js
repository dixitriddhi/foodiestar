import React , {useState } from 'react'
import "./Login.css"
//import axios from "axios"

const Login = () => {
  const [user, setUser] = useState ({
    email: "",
    password: ""

  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]:value
    }

    )}


  return (
    <>
      <div className="login">
        {console.log(user)}
        <h1>Login</h1>
        <input type="text" name="email" value={user.email} placeholder="Enter Email" onChange={handleChange} ></input>
        <input type="password"  name="password" value={user.password} placeholder="Enter Password" onChange={handleChange} ></input>
        <div className="button">Login</div>
        <div>OR</div>
        <div className="button">Register</div>
      </div>
    </>
  )
}

export default Login