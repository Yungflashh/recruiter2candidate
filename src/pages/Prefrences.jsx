import  { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Prefrences.css"

const Preferences = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data from the API
    axios.get('https://r2c.onrender.com/search')
      .then(response => {
        // Assume we are working with the first user in the response
        setUser(response.data.users); // Adjust based on the actual response structure
      })
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 >{user.title}</h2>
      <div >Username: {user.username}</div>
      <div >Company: {user.company}</div>
      <div >Email: {user.email}</div>
      <div >Hiring: {user.hiring }</div>
      <div >Industry: {user.industry}</div>
      <div >Introduction: {user.introduction}</div>
      <div >Qualification: {user.qualification}</div>
      <div >Size: {user.size}</div>
    </div>
  );
}



export default Preferences;
