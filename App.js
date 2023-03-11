import React from 'react'

import "./App.css"

//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
//import Footer from "./Components/Footer/Footer"
// import Login from "./Components/Login/Login"
// import Register from "./Components/Register/Register"



function App () {
  return (
    <>
      <Navbar/>
      <Home/>
      {/* <Footer/> */}
      {/* <Login/>
      <Register/> */}

   </>
  );
}

export default App