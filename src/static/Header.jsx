import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg"
import "../styles/Header.css"
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  return (
    <div className="header-container">

            <div className="logoDiv">
                    <img src={Logo} alt="" />
            </div>
                <div className="nav-container">

                <nav><Link  to={"/"} className="white-text">Home </Link></nav>
                <nav> <Link to={"/aboutUs"} className="white-text">About us </Link>  </nav>
                <nav><Link to={"/recruiter"}className="white-text" >For Recruiter</Link> </nav>
                <nav>For Candidate</nav>

                </div>

                <div className="btn-container">
                    <button>Login</button>
                    <button> <Link to={"/signUp"} className="white-text" >Sign up</Link></button>
                </div>

                <CiMenuFries id="menu-Bar" size={30}/>
    </div>
  )
}

export default Header