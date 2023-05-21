import React from 'react'
import './home.css'
import {AiFillGithub, AiFillLinkedin}from 'react-icons/ai'
import { TbArrowBigRightLines, TbChevronsDown } from 'react-icons/tb'


const Home = () => {
  return (
    <section id='home' className='home section'>

      {/* content visible at wide screen */}
      <div className='leftIcons'>
        <div className='socials grid'>
          <a href="https://github.com/HarshiTsTomar" target='_blank'>
            <AiFillGithub className='icon'/>
          </a>
          <a href="https://www.linkedin.com/in/harshit-singh-tomar-6635a4242/" target='_blank'>
            <AiFillLinkedin className='icon'/>
          </a>
          <div className="line"></div>
        </div>
      </div>

      {/* homeContent */}
      <div className="container homeContainer">

        <span className="introText">
          Hi my name is,
        </span>

        <h1 className='title'>
          Harshit Tomar
        </h1>

        <span className='subTitle'>
          I develope scalable web based applications.
        </span>

        <p className='homeParagraph'>
          I am well versed with industry leading 
          web-dev tools and frameworks.</p>

         <div className="lowerHomeSection">
          <button className='contactBtn'>
            <a href="#contact" className='flex'>
              Contact Me <TbArrowBigRightLines className='icon'/>
            </a>
          </button>

          <div className="scrollDiv">
            <a href="#about" className='flex'>
             <h6 className="scroll">Scroll Down</h6><TbChevronsDown className='icon'/>
            </a>
          </div>
         </div>
      </div>

      {/* right div, with email address*/}

      <div className="rightEmail">
        <div>
          <div className="emailAddress">
            <a href="https://mailto:harshitt59@gmail.com" target='_blank'>
              harshitt59@gmail.com
            </a>
          </div>

          <div className="line"></div>
        </div>
      </div>
    </section>
  )
}

export default Home