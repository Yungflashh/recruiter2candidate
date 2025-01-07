import React from 'react'
import CandidateImg from "../assets/candidateImg.svg"
import RecruiterCard from '../components/RecruiterCard';
import cardimg1 from "../assets/cardVision.svg"
import cardimg2 from "../assets/cardVision2.svg"
import cardimg3 from "../assets/cardVision3.svg"
import cardimg4 from "../assets/cardVision4.svg"
import people2 from "../assets/people2.svg"
import "../styles/ForCandidate.css"

const ForCandidate = () => {
  return (
    <div>

        <div className="for-candidate-hero-section">

                <div className="candidate-hero-text">
                      <h2>Your Dream Job, Just a Click Away</h2>
                      <p>Simplify your job search with personalized matches and seamless applications.</p>
                      <button>Get started for free</button>
                </div>

                <div className="candidate-hero-img">

                  <img src={CandidateImg} alt="an image icon" />

                </div>


        </div>

        <h2>Checkout these advanced features for candidates</h2>

        <div className="cardR">
        <RecruiterCard image={cardimg1} title={"Candidate Search Tools"} desc={"Filter by skills, experience, and more."}/>
        <RecruiterCard image={cardimg2} title={"Profile Management"} desc={"Save candidate profiles and track applications."}/>
        <RecruiterCard image={cardimg3} title={"Instant messaging"} desc={"Send message request to match with candidates"} />
        <RecruiterCard image={cardimg4} title={"Advanced Matching Algorithm"} desc={"Get candidates that fit your needs"}/>
        </div>


       <img id='people' src={people2} alt="" />

    </div>
  )
}

export default ForCandidate