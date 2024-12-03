import "../styles/Chosen.css"
import CardChosen from "./CardChosen"
import chosen1 from "../assets/chosen1.svg"
import chosen2 from "../assets/chosen2.svg"
import chosen3 from "../assets/chosen3.svg"

const Chosen = () => {
  return (
    <div className="chosenDiv">
        <h2>WHY CHOOSE R2C?</h2>
        <p>Learn why R2C is the smart choice for connecting top talent with employers, offering unmatched tools and support for seamless hiring and job matching. </p>

        <div className="cardImages">
            <CardChosen image={chosen1} title={"Personalized Registration for Maximum Relevance"} desc={"Sign up according to your niche and enjoy content and opportunities tailored just for you."}/>
            <CardChosen image={chosen2} title={"Tailored Job Matches and easy application to match."} desc={"Find job opportunities that perfectly match your skills, niche, and career preferences."}/>
            <CardChosen image={chosen3} title={"Personalized Recruiter Search"} desc={"Recruiters can find candidates based on specific niches and expertise, streamlining the hiring process."}/>
        </div>
    </div>
  )
}

export default Chosen