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

                <nav>Home</nav>
                <nav>About us</nav>
                <nav>For Recruiter</nav>
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