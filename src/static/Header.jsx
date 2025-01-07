import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import "../styles/Header.css";
import { CiMenuFries } from "react-icons/ci"; // Menu icon
import { AiOutlineClose } from "react-icons/ai"; // Close icon
import SideBar from "./SideBar"; // Import the SideBar component

const Header = () => {
  // State to manage sidebar visibility and icon
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(true); // Track whether the menu icon or close icon is displayed

  // Toggle sidebar visibility and icon
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setIsMenu(!isMenu); // Toggle the icon between menu and close
  };

  // Close sidebar when link is clicked
  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setIsMenu(true); // Reset the icon back to the menu icon
  };

  return (
    <div className="header-container">
      <div className="logoDiv">
        <img src={Logo} alt="Logo" />
      </div>

      <div className="nav-container">
        <nav>
          <Link to={"/"} className="white-text">
            Home
          </Link>
        </nav>
        <nav>
          <Link to={"/aboutUs"} className="white-text">
            About Us
          </Link>
        </nav>
        <nav>
          <Link to={"/recruiter"} className="white-text">
            For Recruiter
          </Link>
        </nav>
        <nav>
        <Link to={"/candidate"} className="white-text">
      
          For Candidate
          </Link>
          
          
          </nav>
      </div>

      <div className="btn-container">
        <button>
          <Link to={"/signin"} className="white-text">
            Login
          </Link>
        </button>
        <button>
          <Link to={"/signUp"} className="white-text">
            Sign Up
          </Link>
        </button>
      </div>

      {/* Menu Icon or Close Icon */}
      {isMenu ? (
        <CiMenuFries
          id="menu-Bar"
          size={30}
          onClick={toggleSidebar} // Toggle sidebar and icon when clicked
          style={{ cursor: "pointer" }}
        />
      ) : (
        <AiOutlineClose
          id="close-Bar"
          size={30}
          onClick={toggleSidebar} // Toggle sidebar and icon when clicked
          style={{ cursor: "pointer" }}
        />
      )}

      {/* Render Sidebar when isSidebarOpen is true */}
      {isSidebarOpen && <SideBar closeSidebar={closeSidebar} />} {/* Pass closeSidebar to SideBar */}
    </div>
  );
};

export default Header;
