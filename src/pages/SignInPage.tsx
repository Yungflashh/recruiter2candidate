import React, { useState } from "react";
import "../styles/SignInPage.css";
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import {Button} from "antd";
 // Import icons

const SignInPage = () => {
  // Step 1: Define state for email, password, error message, and password visibility
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error message
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  // Step 2: Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  // Step 3: Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh on submit

    // Clear any previous errors
    setError("");

    // Step 4: Log the form data to console
    console.log("Form Data:", { email, password });

    // Create the data object to send to the backend
    const userData = {
      email: email,
      password: password,
    };

    try {
      // Send POST request to your backend
      const response = await fetch("https://r2c.onrender.com/signIn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      // Handle the response from the backend
      const data = await response.json();
      if (response.ok) {
        // Do something on successful sign-in
        console.log("Sign-in successful:", data);
        
      } else {
        // Handle error (invalid credentials, etc.)
        setError(data.message || "Username or password Incorrect, please try again.");
        console.error("Sign-in failed:", data);
      }
    } catch (error) {
      setError("Error during sign-in: " + error.message); // Set generic error message
      console.error("Error during sign-in:", error);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      <div className="signIn-container">
        <h2>Sign In</h2>

        {/* Step 5: Replace custom FormInput with standard input fields */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Enter Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"} // Toggle between text and password types
                name="password"
                id="password"
                value={password}
                onChange={handleInputChange}
                required
              />
              {/* Eye icon to toggle password visibility */}
              <span className="eye-icon" onClick={togglePasswordVisibility}>
                {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
              </span>
            </div>
          </div>

          {/* Step 6: Submit Button */}
          <Button type="primary" htmlType="submit">
            Sign In
          </Button>
        </form>

        {/* Step 7: Display error message if any */}
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default SignInPage;
