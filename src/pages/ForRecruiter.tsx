import React from 'react'
import "../styles/ForRecruiter.css"
import { IoSearchOutline } from "react-icons/io5";
import RecruiterCard from '../components/RecruiterCard';
import cardimg1 from "../assets/cardVision.svg"
import cardimg2 from "../assets/cardVision2.svg"
import cardimg3 from "../assets/cardVision3.svg"
import cardimg4 from "../assets/cardVision4.svg"
import people from "../assets/people.svg"
import { Link } from 'react-router-dom';


const ForRecruiter = () => {
  return (
    <div className='for-recruiter-container'> 

      
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