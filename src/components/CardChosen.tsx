import React from "react"
import "../styles/CardChosen.css"

const CardChosen = ({image, title, desc}) => {
  return (
    <div className="propchosen">
        <img src={image} alt="an image" />
        <h2>{title}</h2>
        <p>{desc}</p>

    </div>
  )
}

export default CardChosen