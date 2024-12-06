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

                <nav><Link to={"/"}>Home </Link></nav>
                <nav> <Link to={"/aboutUs"}>About us </Link>  </nav>
                <nav><Link to={"/recruiter"}>For Recruiter</Link> </nav>
                <nav>For Candidate</nav>

                </div>

                <div className="btn-container">
                    <button>Login</button>
                    <button>Sign up</button>
                </div>

                <CiMenuFries id="menu-Bar" size={30}/>
    </div>
  )
}

export default Header