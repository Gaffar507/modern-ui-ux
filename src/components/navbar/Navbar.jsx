import React,{useState} from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css'

  const MenuIcon = () => {
    return <>
              <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
    </>
  }

const Navbar = () => {

  const[toggle, setToggle] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img className='logo' src={logo} alt="GPT logo" />
        </div>
        <div className="gpt3__navbar-links_container">
            <MenuIcon/>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggle? <RiCloseLine color='#fff' size={27} onClick={()=>setToggle(!toggle)}/> 
        : <RiMenu3Line color='#fff' size={27} onClick={()=>setToggle(!toggle)}/> }
        {toggle && (
          <div className='gpt3__navbar-menu_container scale-up-tr'>
            <div className='gpt3__navbar-menu_container-links'>
              <MenuIcon/>
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
