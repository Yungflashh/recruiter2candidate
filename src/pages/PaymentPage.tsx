import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti'; // Import the Confetti component
import "../styles/PaymentPage.css";

const PaymentPage = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  useEffect(() => {
    // Trigger the confetti when the page loads
    setIsConfettiActive(true);

    // Optionally, stop confetti after a delay (e.g., 3 seconds)
    const timer = setTimeout(() => {
      setIsConfettiActive(false);
    }, 4000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  return (
    <div className='payment-container'>
      {isConfettiActive && <Confetti />}  {/* Conditionally render confetti */}
      <h2>
        You're all set! Start with your free plan or explore premium features to connect faster and smarter
      </h2>
      <button id='payment-btn'>View Plans</button>
    </div>
  );
};

export default PaymentPage;
