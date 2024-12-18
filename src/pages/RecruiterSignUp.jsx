import { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import "../styles/RecruiterSignUp.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const RecruiterSignUp = () => {
  const navigate = useNavigate();
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
  const [usernameTaken, setUsernameTaken] = useState(false);
  const [emailTaken, setEmailTaken] = useState(false);

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

  // Function to check both username and email availability together
  const checkAvailability = async () => {
    const dataToSend = {
      username: formData.username,
      email: formData.email
    };

    try {
      const response = await axios.post('https://r2c.onrender.com/checkCred', dataToSend);

      // Handle success case
      setUsernameTaken(false);
      setEmailTaken(false);

      return true; // Proceed to next step
    } catch (error) {
      // Handle errors if username or email is already taken
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.error;

        if (errorMessage.includes("Username")) {
          setUsernameTaken(true);
          message.error('Username is already taken');
        }
        if (errorMessage.includes("Email")) {
          setEmailTaken(true);
          message.error('Email is already taken');
        }
      } else {
        message.error('An error occurred while checking availability');
      }
      return false;
    }
  };

  const handleNextPage = async () => {
    if (currentPage === 1) {
      // Ensure username, email, and password are entered and valid
      if (formData.username.trim() === '') {
        message.error('Username is required.');
        return;
      }

      if (formData.email.trim() === '') {
        message.error('Email is required.');
        return;
      }

      // Validate email format
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email)) {
        message.error('Please enter a valid email address.');
        return;
      }

      if (formData.password.trim() === '') {
        message.error('Password is required.');
        return;
      }

      // Validate password strength
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(formData.password)) {
        message.error('Password must be at least 8 characters long and contain both letters and numbers.');
        return;
      }

      // Perform the availability check
      const isAvailable = await checkAvailability();
      if (!isAvailable) {
        return; // Exit if username or email is taken
      }
    }

    if (currentPage < 3) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Ensure submission only happens on the last page (page 3)
    if (currentPage === 3) {
      const form = new FormData();

      // Append form data
      form.append('username', formData.username);
      form.append('email', formData.email);
      form.append('password', formData.password);
      form.append('company', formData.company_name);
      form.append('industry', formData.industry);
      form.append('size', formData.company_size);
      form.append('introduction', formData.brief_introduction);
      form.append('qualification', formData.qualification);

      // Append roles and job titles as arrays
      form.append('hiring', JSON.stringify(savedRoles));
      form.append('title', JSON.stringify(savedJobTitles));

      // Append image/logo file if present
      if (formData.image) {
        form.append('logo', formData.image);
      }

      try {
        // Make the API request to submit the form
        const response = await axios.post("https://r2c.onrender.com/signUp", form);
        console.log(response);

        message.success('Sign up successful!');
        navigate("/payment");  // Redirect after successful sign-up
      } catch (error) {
        console.error(error);
        message.error(error.response?.data?.error || 'An error occurred during sign-up.');
      }
    }
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

  // File validation for image upload (file type and size)
  const beforeUpload = (file) => {
    const isImage = file.type.startsWith('image/');
    const isSmallEnough = file.size / 1024 / 1024 < 2; // less than 2MB

    if (!isImage) {
      message.error('You can only upload image files!');
    }

    if (!isSmallEnough) {
      message.error('Image must be smaller than 2MB!');
    }

    return isImage && isSmallEnough;
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
            {usernameTaken && <p style={{ color: 'red' }}>Username is already taken</p>}

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
            {emailTaken && <p style={{ color: 'red' }}>Email is already taken</p>}

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
              action={"https://r2c.onrender.com/upload"}
              beforeUpload={beforeUpload}
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

        <div className="form-navigation">
          {currentPage > 1 && (
            <Button className='btn-cta' type="button" onClick={handlePreviousPage}>Back</Button>
          )}

          {currentPage < 3 ? (
            <Button className='btn-cta' type="button" onClick={handleNextPage}>Next</Button>
          ) : (
            <Button className='btn-cta' type="submit" onClick={handleSubmit}>Submit</Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RecruiterSignUp;
