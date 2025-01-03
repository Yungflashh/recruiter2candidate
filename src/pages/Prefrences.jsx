import { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Prefrences.css";

const Preferences = () => {
  const [users, setUsers] = useState([]);  // Store an array of users

  useEffect(() => {
    // Fetch user data from the API
    axios.get('https://r2c.onrender.com/search')
      .then(response => {
        // Store the list of users in state
        setUsers(response.data.users);  // Make sure the API response structure matches this
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  if (users.length === 0) {
    return <div>Loading...</div>;  // Display loading state if no users have been fetched yet
  }

  // Default image URL
  const defaultLogo = 'https://via.placeholder.com/80';  // You can replace this with your own default image URL

  return (
    <div className="user-list">
      {users.map((user) => (
        <div className="card" key={user.username}> {/* Using username as a unique key */}
          {/* Display logo or default logo */}
          <img 
            src={user.logo ? user.logo : defaultLogo}  // Use defaultLogo if user.logo is falsy
            alt={`${user.company} logo`} 
            className="user-logo" 
          />
          
          <h2 className="title">{user.title}</h2>
          <div className="username">Username: {user.username}</div>
          <div className="company">Company: {user.company}</div>
          <div className="email">Email: {user.email}</div>
          <div className="hiring">Hiring: {user.hiring}</div>
          <div className="industry">Industry: {user.industry}</div>
          <div className="introduction">Introduction: {user.introduction}</div>
          <div className="qualification">Qualification: {user.qualification}</div>
          <div className="size">Size: {user.size}</div>
        </div>
      ))}
    </div>
  );
};

export default Preferences;
