import React from 'react'
import FormInput from "./FormInput"
import "../styles/Contact.css"

const Contact = () => {
  return (
    <div className='contact-container'>
         <h2>CONTACT US</h2>
         <p>Send us a message and we will get back to you as soon as possible</p>

         <div className="formData">
            <FormInput label={"Enter Your Name"} type={"text"} name={"name"}/>
            <FormInput label={"Enter Your Email Address"} type={"email"} name={"email"}/>
            <FormInput  label={"Send us a message"} type={"textbox"} name={"texbox"}/>

            <button>Send</button>

         </div>
    </div>
  )
}

export default Contact