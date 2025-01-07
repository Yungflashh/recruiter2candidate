import React from 'react'
import "../styles/ForRecruiter.css"

import RecruiterCard from '../components/RecruiterCard';
import cardimg1 from "../assets/cardVision.svg"
import cardimg2 from "../assets/cardVision2.svg"
import cardimg3 from "../assets/cardVision3.svg"
import cardimg4 from "../assets/cardVision4.svg"
import people from "../assets/people.svg"
import frImg from "../assets/frImg.svg"
import { Link } from 'react-router-dom';


const ForRecruiter = () => {
  return (
    <div className='for-recruiter-container'> 

        <div className="forRecruiter-hero-section">
            <div className="fr-text-container">
                  <h2>Hire Smarter, Faster, and Better</h2>
                  <p>Connect with top talent effortlessly and fill positions faster than ever.</p>
                  <button>Discover Candidates now</button>
            </div>

            <div className="fr-img-div">
                <img src={frImg} alt="an image" />

            </div>


          
        </div>

        <h2>Checkout these advanced features for Recruiters</h2>
        <div className="cardR">
        <RecruiterCard image={cardimg1} title={"Candidate Search Tools"} desc={"Filter by skills, experience, and more."}/>
        <RecruiterCard image={cardimg2} title={"Profile Management"} desc={"Save candidate profiles and track applications."}/>
        <RecruiterCard image={cardimg3} title={"Instant messaging"} desc={"Send message request to match with candidates"} />
        <RecruiterCard image={cardimg4} title={"Advanced Matching Algorithm"} desc={"Get candidates that fit your needs"}/>
        </div>


    <img id='people' src={people} alt="" />

     <Link id='link' to={"/RecruiterSignUp"}> <button id='btn' >Sign Up as a Recruiter</button></Link> 
    </div>
  )
}

export default ForRecruiter