import { Link } from 'react-router-dom'
import "../styles/SideBar.css"

const SideBar = ({ closeSidebar }) => {
  return (
    <>
         <div className="sideBar-container">

<nav><Link  to={"/"} className="white-text" onClick={closeSidebar}>Home </Link></nav>
<nav> <Link to={"/aboutUs"} className="white-text" onClick={closeSidebar}>About us </Link>  </nav>
<nav><Link to={"/recruiter"}className="white-text" onClick={closeSidebar} >For Recruiter</Link> </nav>
<nav>For Candidate</nav>


    <div>
        
    <button> <Link to={"/signin"} className="white-text" onClick={closeSidebar}>Login</Link></button>
    <button> <Link to={"/signUp"} className="white-text" onClick={closeSidebar}>Sign up</Link></button>
    </div>

</div>
    </>
  )
}

export default SideBar