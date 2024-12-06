import React from 'react'
import "../styles/AboutPage.css"
import aboutImg from "../assets/aboutImg.svg"
import Vision from '../components/Vision'
import CoreValues from '../components/CoreValues'

const AboutPage = () => {
  return (
    <div>
            <div className="heroSectionAbout">
                <h2>About us</h2>

                <div className="storyDiv">
                    <div className="story-text">
                        <h2>OUR STORY</h2>
                        <p>Recruiter 2 Candidate was born out of the need to create a simpler, more effective way for recruiters and candidates to connect. We noticed that traditional job boards often left job seekers feeling lost in the crowd and recruiters overwhelmed by the search for the right talent. Our platform is designed to change that by putting the candidate in the spotlight. Here, job seekers create personalized profiles that showcase their skills, experience, and what sets them apart—giving recruiters a clear, focused way to find the perfect match for their needs. Our mission is simple: to bridge the gap between candidates and recruiters, making it easier for both sides to find the perfect fit, faster and with more transparency.
                        </p>
                    </div>


                    <div className="story-image">
                            <img src={aboutImg} alt="" />
                    </div>
                </div>

            </div>

            <Vision/>
            <CoreValues />
    </div>
  )
}

export default AboutPage