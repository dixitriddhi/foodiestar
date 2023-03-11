import React ,{ useState} from 'react'
import "./Register.css"
import axios from 'axios'
import {  Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'
// eslint-disable-next-line
function Register() {

  const [user, setUser] = useState ({
    name: "",
    email: "",
    password: "",
    reEnterPassword: ""
  })

  const handleChange = e => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]:value
    } 

    )}
    const register = () => {
      const {name,email,password,reEnterPassword } = user
      if (name && email && (password === reEnterPassword) )
      {
        alert("Posted")
        axios.post("http://localhost:9002/register",user)
        .then(res => console.log(res))
      }else
      {
        alert("invalid input")
      }
 
    
    }
    const login = () => {
      <Routes>
      <Route path='/Login' element={<Login/>}/>
      </Routes>  
    }

  return (
    <>
      <div className="register">
        {console.log("User",user)}
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Enter Name" onChange={handleChange}></input>
        <input type="text" name="email" value={user.email} placeholder="Enter Email" onChange={handleChange}></input>
        <input type="password" name="password" value={user.password} placeholder="Enter Password" onChange={handleChange}></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-Enter Password" onChange={handleChange}></input>
        <div className="button" onClick={register} >Register</div>
        <div>OR</div>
        <div className="button" onClick={login} >Login</div>
      </div>
    </>
  )
}

export default Register