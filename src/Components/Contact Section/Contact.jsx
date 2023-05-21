import React, {useRef} from 'react'
import './contact.css'

import { BsInstagram } from 'react-icons/bs'
import { TbArrowRightCircle } from 'react-icons/tb'
import { AiFillLinkedin } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'

import emailjs from 'emailjs-com'

const Contact = () => {

  const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zmrpk36', 'template_qazvtxw', form.current, 'oijJrNIpOtkCVwG-J')
        e.target.reset()
    };


  return (
    <section id='contact' className='contact section container'>

       <div className="sectionTitle">
        <span className="titleNumber">04.</span>
        <h5 className="titleText">Contact
        <div className="underline"><span></span> </div>
        </h5> 
      </div>


        <div className="contactContainer grid">

          <div className="socialContacts grid">
            <h3>Let's Talk</h3>

            <div className="cards grid">


            <div className="card">
                <div>
                  <AiFillLinkedin className='icon' />
                </div>
                <h4>LinkedIn</h4>
                <span className="userName">
                  Harshit Singh Tomar
                </span>

                <div>
                  <a href="https://www.linkedin.com/in/harshit-singh-tomar-6635a4242/" className='flex'>
                    Send Message
                    <TbArrowRightCircle className='icon'/>
                  </a>
                </div>
              </div>

              <div className="card">
                <div>
                  <BsInstagram className='icon' />
                </div>
                <h4>Instagram</h4>
                <span className="userName">
                  @harshitt58
                </span>

                <div>
                  <a href="https://instagram.com/harshitt58?igshid=MzNlNGNkZWQ4Mg==" className='flex'>
                    Send Message
                    <TbArrowRightCircle className='icon'/>
                  </a>
                </div>
              </div>

              <div className="card">
                <div>
                  <SiGmail className='icon' />
                </div>
                <h4>Gmail</h4>
                <span className="userName">
                  harshitt59@gmail.com
                </span>

                <div>
                  <a href="#Contact" className='flex'>
                    Send Message
                   
                  </a>
                </div>
              </div>

            </div>

          </div>

          <div className="form grid">
            <h3>Send me an email</h3>

            <form ref={form} onSubmit={sendEmail}>

              <input type="text" placeholder='Enter your Name' name='name' />
              <input type="email" placeholder='Enter your Email' name='email' />

              <textarea name="message" placeholder='Enter your message'></textarea>

              <button className='formBtn' type='submit' name='submit'>
                Send Email
              </button>
              
            </form>
          </div>
        </div>
    </section>
  )
}

export default Contact