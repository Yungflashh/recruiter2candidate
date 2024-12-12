import { useState } from 'react';
import "../styles/RecruiterSignUp.css";

const RecruiterSignUp = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    company_name: '',
    industry: '',
    company_size: '',
    image: '',
    brief_introduction: '',
    role_type: '', // Stores the input for role type
    job_titles: [], // Stores added job titles as an array
  });

  // Progress calculation
  const progress = ((currentPage - 1) / 3) * 100;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0], // Handle the first file selected
    });
  };

  // Add job title to list
  const handleAddJobTitle = () => {
    if (formData.role_type.trim() !== "") {
      setFormData({
        ...formData,
        job_titles: [...formData.job_titles, formData.role_type],
        role_type: '', // Reset role_type input after adding
      });
    }
  };

  // Remove job title from list
  const handleRemoveJobTitle = (index) => {
    const updatedJobTitles = formData.job_titles.filter((_, i) => i !== index);
    setFormData({
      ...formData,
      job_titles: updatedJobTitles,
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
              value={formData.company_name}
              onChange={handleInputChange}
              placeholder="Company Name"
              required
            />

            <label>Industry</label>
            <input
              type="text"
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              placeholder="Industry"
              required
            />

            <label>Company size (number of employees)</label>
            <input
              type="text"
              name="company_size"
              value={formData.company_size}
              onChange={handleInputChange}
              placeholder="Company size"
              required
            />
          </div>
        )}

        {currentPage === 2 && (
          <div className="form-page">
            <h2>Setting up your brand</h2>
            <p>Setting up a brand will help present your company in an organized way.</p>

            <label>Upload company logo</label>
            <input
              type="file"
              name="image"
              onChange={handleFileChange}
              required
            />

            <label>Brief introduction</label>
            <textarea
              name="brief_introduction"
              value={formData.brief_introduction}
              onChange={handleInputChange}
              placeholder="Enter a brief introduction of your company"
              required
            />
          </div>
        )}

        {currentPage === 3 && (
          <div className="form-page">
            <h2>Setting up your Preferences</h2>
            <p>Please fill in and select the accurate information below.</p>

            {/* Types of roles you hire */}
            <label>Current job titles</label>
            <p>Add more than 5 job titles to increase your chance of being noticed.</p>
            <input
              type="text"
              name="role_type"
              value={formData.role_type}
              onChange={handleInputChange}
              placeholder="Enter a role type"
              required
            />
            <button type="button" onClick={handleAddJobTitle}>Add Job Title</button>

           

            {/* Display added job titles below */}
            <div>
              <ul>
                {formData.job_titles.map((job, index) => (
                  <li key={index} className="job-title-item">
                    {job}
                    <span
                      className="cancel-icon"
                      onClick={() => handleRemoveJobTitle(index)}
                      role="button"
                      aria-label="Remove job title"
                    >
                      &times;
                    </span>
                  </li>
                ))}
              </ul>
            </div>
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
