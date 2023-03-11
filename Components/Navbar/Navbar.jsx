import React, {useState} from 'react'
import './Nvbar.css'
import {MdOutlineFastfood} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'





const Navbar = () => {
   const [active,setActive] = useState('navBar')
    const showNav = ()=>{
      setActive('navBar activeNavbar')
    }
    const removeNav = ()=>{
      setActive('navBar')
    }
    const{loginWithRedirect, logout, user, isAuthenticated} = useAuth0()

  return (

    <section className='navBarSection'>
      <header className="header flex">
        <div className="logoDiv">

          <Link to={'/'} className="logo">
             <h1><MdOutlineFastfood className='icon'/> FoodieStar</h1>
          </Link>

        </div>
        <div className={active}>
          <ul className="navlist flex">
            <li className="navItem">
              <Link to={'/'} className="navLink">Home</Link>
            </li>
            {/* <li className="navItem">
              <Link to={'/Login'} className="navLink">Login</Link>
            </li> */}

            {/* <li className="navItem">
              <a href='/Register' className="navLink">Register</a>
            </li> */}

            <li className="auth">
              {
                isAuthenticated && <p>
                  {user.nickname}
                </p>
              }
            </li>

          {
            isAuthenticated ?(
            <li className="auth">
            <button className="auth0" onClick={
              ()=> logout({returnTo: window.location.origin})}>Log out</button>
            </li> )
            :
            (<li className="auth">
            <button className="auth0" onClick={
              ()=> loginWithRedirect()}>Login</button>
            </li>)
          }


          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon"/>
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icons"/>
        </div>
      </header>
    </section>

  )
}

export default Navbar