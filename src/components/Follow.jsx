import "../styles/Follow.css"
import FollowCard from './FollowCard'
import followimage from "../assets/follow.svg"

const Follow = () => {
  return (
    <div className='follow-Container'>
        <h2>FOLLOW FOUR EASY STEPS</h2>
        <p>Discover how easy it is to find your perfect match on R2C! In just four simple steps, you`ll be on your way to a successful recruitment or job search journey</p>
        
            <div  className='cardImgDiv'>

            <FollowCard image={followimage}/>
            <FollowCard image={followimage}/>
            <FollowCard image={followimage}/>
            <FollowCard image={followimage}/>

            </div>
       


    </div>
  )
}

export default Follow
