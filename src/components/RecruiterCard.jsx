import "../styles/RecruiterCard.css"

const RecruiterCard = ({image, title, desc}) => {
  return (
    <div className="recruiter-container">
         <img src={image} alt="an image" />
         <h2>{title}</h2>
         <p>{desc}</p>
    </div>
  )
}

export default RecruiterCard