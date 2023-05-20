import React from 'react'
import './contact.css'
import { BsInstagram } from 'react-icons/bs'
import{ FaChevronCircleRight} from 'react-icons/fa'

const Contact = () => {
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
                  <BsInstagram className='icon'/>
                </div>
                <h4>Instagram</h4>
                <span className="userName">
                  @harshitt58
                </span>

                <div>
                  <a href="https://instagram.com/harshitt58?igshid=MzNlNGNkZWQ4Mg==" className='flex'>
                    Send Message
                    <FaChevronCircleRight className='icon'/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Contact