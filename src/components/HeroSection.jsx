import "../styles/HeroSection.css"
import HeroImg from "../assets/heroSection-img.svg"

const HeroSection = () => {
  return (
    <div className="Hero-section-container">
            <div className="hero-text">
                <h2>WHERE OPPORTUNITY AND TALENT FIND THEIR PERFECT MATCH.</h2>
                <p>Streamlining the path, from talent to opportunity.</p>

                <button>Search for a Job</button>
                <button>View Matches</button>
            </div>

            <div className="heroDiv">
                <img src={HeroImg} alt="an image"  />
            </div>

    </div>
  )
}

export default HeroSection