import React from 'react'
import FormInput from '../components/FormInput'
import "../styles/SignInPage.css"
import { Button } from 'antd'


const SignInPage = () => {
  return (
    <div>
        
        <div className="signIn-container">
            <h2>Sign In</h2>

           
            <FormInput label='Enter Email Address' type='text' name='email' />
            <FormInput label='Password' type='password' name='password' />

            <button> Sign In </button>
        </div>
    </div>
  )
}

export default SignInPage