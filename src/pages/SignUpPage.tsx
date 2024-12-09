import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/SignUpPage.css"

const SignUpPage = () => {
  return (
    <div className="signUpContainer">
            <div className='welcome-container'>
                <h2>Welcome to R2C!</h2>
                <p>We are glad to have you here, lets set up your new account.</p>
 
                <div className="btn">
                <Link to={"/RecruiterSignUp"} className="black-text"> <button> Recruiter</button>  </Link> 
                    <button>Candidate</button>
                </div>
            </div>

            
    </div>
  )
}

export default SignUpPage