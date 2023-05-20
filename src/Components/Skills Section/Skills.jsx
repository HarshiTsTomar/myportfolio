import React from 'react'
import './skill.css'
import { CgFigma} from 'react-icons/cg'
import {BsGit, BsGithub} from 'react-icons/bs'
import { TbBrandReactNative, TbBrandBootstrap, TbBrandVscode, TbApi } from 'react-icons/tb'
import { SiTailwindcss, SiMongodb, SiAdobephotoshop, SiExpress } from 'react-icons/si'
import {IoLogoJavascript, IoLogoSass, IoLogoNodejs} from 'react-icons/io'

const Skills = () => {
  return (
    <section id='skill' className='skills container section'>
      
      <div className="sectionTitle">
        <span className="titleNumber">02.</span>
        <h5 className="titleText">Skills
        <div className="underline"><span></span> </div>
        </h5> 
      </div>
      
      {/* skills container */}
      <div className="skillsContainer grid">
        {/*single group of skills  */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className='title'>Web Development</h2>
            <span className='subtitle'>
             
            </span>
          </div>

          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandReactNative className='icon'/>
              </div>
              <span className="skillName"> React</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoJavascript className='icon'/>
              </div>
              <span className="skillName">JavaScript</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoSass className='icon'/>
              </div>
              <span className="skillName">Sass</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <IoLogoNodejs className='icon'/>
              </div>
              <span className="skillName">NodeJs</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiTailwindcss className='icon'/>
              </div>
              <span className="skillName">Tailwind</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiMongodb className='icon'/>
              </div>
              <span className="skillName">Mongodb</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandBootstrap className='icon'/>
              </div>
              <span className="skillName">Bootstrap</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiExpress className='icon'/>
              </div>
              <span className="skillName">ExpressJS</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <TbApi className='icon'/>
              </div>
              <span className="skillName">Rest API</span>
            </div>

          </div>
        </div>


        {/*single group of skills  */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className='title'>UI/UX Design</h2>
            <span className='subtitle'>
              
            </span>
          </div>

          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <CgFigma className='icon'/>
              </div>
              <span className="skillName">Figma</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <SiAdobephotoshop className='icon'/>
              </div>
              <span className="skillName">Photoshop</span>
            </div>


          </div>
        </div>


        {/*single group of skills  */}
        <div className="skillGroup">
          <div className="groupTitle">
            <h2 className='title'>Other Skills</h2>
            <span className='subtitle'>
              
            </span>
          </div>

          <div className="generalSkills">
            <div className="singleSkill">
              <div className="iconBox flex">
                <BsGit className='icon'/>
              </div>
              <span className="skillName">Git</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <BsGithub className='icon'/>
              </div>
              <span className="skillName">Github</span>
            </div>

            <div className="singleSkill">
              <div className="iconBox flex">
                <TbBrandVscode className='icon'/>
              </div>
              <span className="skillName">Vscode</span>
            </div>

          </div>
        </div>
      </div> 
    </section>
  )
}

export default Skills