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
                    <button> <Link to={"/RecruiterSignUp"} className="black-text">Recruiter</Link> </button>
                    <button>Candidate</button>
                </div>
            </div>

            
    </div>
  )
}

export default SignUpPage