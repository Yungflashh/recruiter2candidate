import { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import "../styles/RecruiterSignUp.css";
import axios from "axios";

const RecruiterSignUp = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    company_name: '',
    industry: '',
    company_size: '',
    image: null,
    brief_introduction: '',
    roles: '',
    job_title: '',
    qualification: '',
  });
  const [savedRoles, setSavedRoles] = useState([]);
  const [savedJobTitles, setSavedJobTitles] = useState([]);

  // Progress calculation
  const progress = ((currentPage - 1) / 3) * 100;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (info) => {
    if (info.file.status === 'done') {
      setFormData({
        ...formData,
        image: info.file.originFileObj,
      });
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
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

    const form = new FormData();

    // Appending form fields to the FormData object
    form.append('username', formData.username);
    form.append('email', formData.email);
    form.append('password', formData.password);
    form.append('company', formData.company_name);
    form.append('industry', formData.industry);
    form.append('size', formData.company_size);
    form.append('introduction', formData.brief_introduction);
    form.append('qualification', formData.qualification);

    // Appending roles and job titles as arrays
    form.append('hiring', JSON.stringify(savedRoles));
    form.append('title', JSON.stringify(savedJobTitles));

    // Appending the image/logo file
    if (formData.image) {
      form.append('logo', formData.image);
    }

    // Make API request
    axios.post("http://r2c.onrender.com/signUp", form)
      .then(data => {
        console.log(data);
        message.success('Sign up successful!');
      })
      .catch(error => {
        console.log(error);
        message.error('Sign up failed!');
      });
  };

  const handleAddRole = () => {
    if (formData.roles.trim() !== "") {
      setSavedRoles([...savedRoles, formData.roles]);
      setFormData({ ...formData, roles: '' });
    }
  };

  const handleAddJobTitle = () => {
    if (formData.job_title.trim() !== "") {
      setSavedJobTitles([...savedJobTitles, formData.job_title]);
      setFormData({ ...formData, job_title: '' });
    }
  };

  const handleDeleteRole = (roleToDelete) => {
    setSavedRoles(savedRoles.filter(role => role !== roleToDelete));
  };

  const handleDeleteJobTitle = (jobTitleToDelete) => {
    setSavedJobTitles(savedJobTitles.filter(job => job !== jobTitleToDelete));
  };

  return (
    <div className="form-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>

      <form onSubmit={handleSubmit}>
        {currentPage === 1 && (
          <div className="form-page">
            <h2>Setting up Your Company Info</h2>

            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Username"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Password"
              required
            />

            <label htmlFor="company_name">Company Name</label>
            <input
              type="text"
              id="company_name"
              name="company_name"
              value={formData.company_name}
              onChange={handleInputChange}
              placeholder="Company Name"
              required
            />

            <label htmlFor="industry">Industry</label>
            <input
              type="text"
              id="industry"
              name="industry"
              value={formData.industry}
              onChange={handleInputChange}
              placeholder="Industry"
              required
            />

            <label htmlFor="company_size">Company Size</label>
            <input
              type="number"
              id="company_size"
              name="company_size"
              value={formData.company_size}
              onChange={handleInputChange}
              placeholder="Company Size"
              required
            />
          </div>
        )}

        {currentPage === 2 && (
          <div className="form-page">
            <h2>Setting up your brand</h2>

            <label htmlFor="image">Upload company logo</label>
            <Upload
              name="logo"
              listType="picture-card"
              showUploadList={false}
              action="/upload" // Can be used to display upload progress
              onChange={handleFileChange}
            >
              {formData.image ? (
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="Logo preview"
                  style={{ width: '100px', height: 'auto' }}
                />
              ) : (
                <Button icon={<UploadOutlined />}>Upload</Button>
              )}
            </Upload>

            <label htmlFor="brief_introduction">Brief Introduction</label>
            <textarea
              id="brief_introduction"
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

            <label htmlFor="roles">Roles you hire for</label>
            <input
              type="text"
              id="roles"
              name="roles"
              value={formData.roles}
              onChange={handleInputChange}
              placeholder="Roles"
            />
            <button type="button" onClick={handleAddRole}>Add Role</button>

            <div className="saved-items">
              <h4>Saved Roles</h4>
              {savedRoles.length > 0 ? (
                <ul>
                  {savedRoles.map((role, index) => (
                    <li key={index}>
                      {role}
                      <button
                        type="button"
                        onClick={() => handleDeleteRole(role)}
                        className="delete-icon"
                      >
                        ❌
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No roles added yet.</p>
              )}
            </div>

            <label htmlFor="job_title">Job Titles</label>
            <input
              type="text"
              id="job_title"
              name="job_title"
              value={formData.job_title}
              onChange={handleInputChange}
              placeholder="Job Title"
            />
            <button type="button" onClick={handleAddJobTitle}>Add Job Title</button>

            <div className="saved-items">
              <h4>Saved Job Titles</h4>
              {savedJobTitles.length > 0 ? (
                <ul>
                  {savedJobTitles.map((jobTitle, index) => (
                    <li key={index}>
                      {jobTitle}
                      <button
                        type="button"
                        onClick={() => handleDeleteJobTitle(jobTitle)}
                        className="delete-icon"
                      >
                        ❌
                      </button>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No job titles added yet.</p>
              )}
            </div>

            <label>Qualification</label>
            <div>
              <input
                type="radio"
                id="degree"
                name="qualification"
                value="Degree"
                onChange={handleInputChange}
                checked={formData.qualification === 'Degree'}
              />
              <label htmlFor="degree">Degree</label>
            </div>
            <div>
              <input
                type="radio"
                id="diploma"
                name="qualification"
                value="Diploma"
                onChange={handleInputChange}
                checked={formData.qualification === 'Diploma'}
              />
              <label htmlFor="diploma">Diploma</label>
            </div>
            <div>
              <input
                type="radio"
                id="certificate"
                name="qualification"
                value="Certificate"
                onChange={handleInputChange}
                checked={formData.qualification === 'Certificate'}
              />
              <label htmlFor="certificate">Certificate</label>
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
