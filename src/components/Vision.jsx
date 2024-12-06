import "../styles/Vision.css"
import VisionImg from "../assets/visionImg.svg"

const Vision = () => {
  return (
    <div>
        <div className="visionCOntainer">
                <div className="vision-text">
                    <h2>VISION STATEMENT</h2>
                    <p>To close the gap between recruiters and untapped talent, streamlining the hiring process so that both recruiters and candidates are equally visible, valued, and able to connect effortlessly.</p>
                </div>

                <div className="visionImg">
                    <img src={VisionImg} alt="a vision image" />
                </div>

        </div>
    </div>
  )
}

export default Vision