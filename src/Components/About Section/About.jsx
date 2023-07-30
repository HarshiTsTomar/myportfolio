import React from 'react'
import './about.css'
import {TbCloudDownload} from 'react-icons/tb'
import img from '../../Assets/ht4.jpeg'

const About = () => {
  return (
    <section id='about' className='about section container'>

      <div className="sectionTitle">
        <span className="titleNumber">01.</span>
        <h5 className="titleText">About Me
        <div className="underline"><span></span> </div>
        </h5> 
      </div>

      <div className="sectionContent grid">
       <div className="textSection">
        <h4>I'm a passionate and determined Web developer.
          I have experience using the MERN stack to build accessible
          component-based web applications.<br/>
          Ability to deliver quality results while collaborating in rapidly changing work
          environments and team compositions.
          <br/>
          In addition to Web-Dev, I also dabble into Web design
          and love creating simple and clean UI/UX in Figma.
          </h4>

          <div className="aboutBtn">
            <a href="HarshitCVs.pdf" download="HarshitCVs.pdf" className='flex'>
              Download CV <TbCloudDownload className='icon'/>
            </a>
          </div>
        </div>  

        <div className="aboutImgDiv">
          <img src={img} alt="Harshit Tomar" />
        </div>   

      </div>
    </section>
  )
}

export default About
