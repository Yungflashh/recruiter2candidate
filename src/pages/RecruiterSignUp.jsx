import  { useState } from 'react';
import "../styles/RecruiterSignUp.css"

const RecruiterSignUp = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    company_name: '',
    industry: '',
    company_size: '',
    image : '',
    brief_introduction : ''
  });

  // Progress calculation
  const progress = ((currentPage - 1) / 3) * 100;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleNextPage = () => {
    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or display a success message)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="form-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div style={{ width: `${progress}%` }} className="progress"></div>
      </div>

      <form onSubmit={handleSubmit}>
        {currentPage === 1 && (
          <div className="form-page">
            <h2>Setting up Your Company Info</h2>

            <label>Enter company name</label>
            <input
              type="text"
              name="company_name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Company Name"
              required
            />

            <label>Industry</label>

            <input
              type="text"
              name="Industry"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Industry"
              required
            />


            <label>Company size (number of employees)</label>

            <input
              type="text"
              name="size"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Company size"
              required
            />
          </div>
        )}

        {currentPage === 2 && (
          <div className="form-page">
            <h2>Page 2: Contact Info</h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
            />
          </div>
        )}

        {currentPage === 3 && (
          <div className="form-page">
            <h2>Page 3: Address</h2>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Your Address"
              required
            />
          </div>
        )}

        <div className="navigation-buttons">
          {currentPage > 1 && (
            <button type="button" onClick={handlePreviousPage}>Back</button>
          )}
          {currentPage < 3 ? (
            <button type="button" onClick={handleNextPage}>Continue</button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RecruiterSignUp;
