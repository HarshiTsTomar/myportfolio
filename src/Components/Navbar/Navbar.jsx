import React, {useState} from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
   
  // toggle navbar on and off at small width
  const [active, setActive]= useState('navBar')

  // this will bring navbar from top
  const showNavBar = () =>{
    setActive('navBar activeNavBar')
  }
  const removeNavBar = () =>{
    setActive('navBar')
  }

const [activeHeader, setactiveHeader] = useState('header')
const addBg = () =>{
  if(window.scrollY >= 10){
    setactiveHeader('header activeHeader')
  }
  else{
    setactiveHeader('header')
  }
}

window.addEventListener('scroll', addBg)

  return (
    <header className={activeHeader}>
      <div className='logoDiv'>
        <h1 className='logo'><a href="#home">HT</a></h1>
      </div>

      <div className={active}>
        <ul onClick={removeNavBar} className='navLists'>
          <li className='navItem'>
           <a href="#about" className='navLink'>
            <span className='headerNumber'>1.</span> About</a>    
          </li> 
          <li className='navItem'>
           <a href="#skill" className='navLink'>
           <span className='headerNumber'>2.</span> Skills</a>   
          </li> 
          <li className='navItem'>
           <a href="#projects" className='navLink'>
           <span className='headerNumber'>3.</span> Projects</a>    
          </li> 
          <li className='navItem'>
           <a href="#contact" className='navLink'>
           <span className='headerNumber'>4.</span> Contact</a>    
          </li> 
           <button className='btn'>
            <a href="HarshitResume.pdf" download >Resume</a>
           </button>
        </ul>

        <div onClick={removeNavBar} className='closeNavBar'>
            <AiFillCloseCircle className='icon'/>
        </div>
     </div>

     <div onClick={showNavBar} className='toggleNavBar'>
      <TbGridDots className='icon'/>
     </div>

     
    </header>
  )
}

export default Navbar
