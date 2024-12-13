import React from 'react'
import FormInput from '../components/FormInput'

const SignInPage = () => {
  return (
    <div>
        
        <div className="signIn-container">
            <h2>Sign In</h2>

           
            <FormInput label='Enter Email Address' type='text' name='email' />
        </div>
    </div>
  )
}

export default SignInPage