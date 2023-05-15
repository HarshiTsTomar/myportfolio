import React from 'react'
import './navbar.css'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  return (
    <header className='header'>
      <div className='logoDiv'>
        <h1 className='logo'><a href="#home">HT</a></h1>
      </div>

      <div className='navBar'>
        <ul className='navLists'>
          <li className='navItem'>
           <a href="#about" className='navLink'>
            <span className='headerNumber'>1.</span> About</a>    
          </li> 
          <li className='navItem'>
           <a href="#skills" className='navLink'>
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
            <a href="">Resume</a>
           </button>
        </ul>

        <div className="closeNavBar">
            <AiFillCloseCircle className='icon'/>
        </div>
     </div>

     <div className='toggleNavBar'>
      <TbGridDots className='icon'/>
     </div>

     
    </header>
  )
}

export default Navbar