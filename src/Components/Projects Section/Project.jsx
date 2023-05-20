import React from 'react'
import './projects.css'
import { FiGithub } from 'react-icons/fi'


import img1 from '../../Assets/cky.png'
import img2 from '../../Assets/travel.png'
import img3 from '../../Assets/gpt.png'
import img4 from '../../Assets/nike.png'
import img5 from '../../Assets/port.png'
import img6 from '../../Assets/apparel.png'

const data = [
  {
    id:1,
    image:img1,
    demo:'',
    liveLink:'',
    github:'',
    title:'CodeKaroYaaro',
    desc:'A modern take on educational platform websites.You can buy online courses on Web,Android or Game development. Made this for a client that wanted a fun and interactive website that holds attention and increases click through rates.',
    tech1:'React',
    tech2:'HTML',
    tech3:'CSS',
    tech4:'Javascript',

  },
  {
    id:2,
    image:img2,
    demo:'',
    liveLink:'',
    github:'',
    title:'Travel Buddy',
    desc:'Too much stress? Wanna take a break? Plan your next vacation with travel buddy. A concept frontend travel agency website that is an eye-candy to look at.',
    tech1:'React',
    tech2:'HTML',
    tech3:'CSS',
    tech4:'Javascript',

  },
  {
    id:3,
    image:img3,
    demo:'',
    liveLink:'',
    github:'',
    title:'Have a chat',
    desc:'Dont want to sit through an hour long lecture on youtube? Well now, you dont have to. This website turns any youtube video you want into a chatbot using OpenAI api. So you can just ask away your doubts in seconds.',
    tech1:'React',
    tech2:'RESTful Api',
    tech3:'Langchain',
    tech4:'MongoDB',

  },
  {
    id:4,
    image:img4,
    demo:'',
    liveLink:'',
    github:'',
    title:'Air Max',
    desc:'A concept Nike Air Max Lebagh website, landing page UI design.',
    tech1:'Figma',
    tech2:'Photoshop',
    tech3:'',
    tech4:'',

  },
  {
    id:5,
    image:img5,
    demo:'',
    liveLink:'',
    github:'',
    title:'Figma Portfolio',
    desc:'A super stylistic personal project of mine. Portfolio website UI/UX design themed around glassmorphism.',
    tech1:'',
    tech2:'',
    tech3:'Figma',
    tech4:'Photoshop',

  },
  {
    id:6,
    image:img6,
    demo:'',
    liveLink:'',
    github:'',
    title:'Fauxica',
    desc:'A minimalistic website UI design for a premium apparel brand.',
    tech1:'',
    tech2:'',
    tech3:'Photoshop',
    tech4:'Figma',

  }
]

const Project = () => {
  return (
    <section id='projects' className='project container section'>
      
      <div className="sectionTitle">
        <span className="titleNumber">03.</span>
        <h5 className="titleText">Projects
        <div className="underline"><span></span> </div>
        </h5> 
      </div>

      <div className="projectContainer grid">
        {
          data.map(({id, github, image, desc, title,tech1,
             tech2, tech3, tech4}) =>{
              return(
                <div key={id} className="singleProject">

                  <div className="externalLinks flex">
                    <div className="githubIcon">
                      <a href={github} target='_blank'>
                        <FiGithub className='icon'/>
                      </a>
                    </div>
                  </div>

                  <div className="imgDiv">
                    <a href="" target='_blank'>
                      <img src={image} alt="title" />
                    </a>
                  </div>

                  <div className="projectTitle">
                    <h3>{title}</h3>
                  </div>

                  <div className="desc">
                    {desc}
                  </div>

                  <div className="technologies flex">
                    <small>{tech1}</small>
                    <small>{tech2}</small>
                    <small>{tech3}</small>
                    <small>{tech4}</small>
                  </div>
                </div>
              )
             })
        }

      </div>

    </section>
  )
}

export default Project