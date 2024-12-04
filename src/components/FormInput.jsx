import { useState } from 'react';
import '../styles/FormInput.css'; 
import PropTypes from 'prop-types';


const FormInput = ({ label, type, name }) => {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  const handleFocus = () => setFocused(true);
  const handleBlur = () => {
    if (value === '') setFocused(false);
  };
  const handleChange = (e) => setValue(e.target.value);

  return (
    <div className="form-Div">
      <div className={`input-wrapper ${focused || value ? 'active' : ''}`}>
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          id={name}
        />
        <label htmlFor={name} className="input-label">{label}</label>
        
      </div>
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired, 
  type: PropTypes.string.isRequired,   
  name: PropTypes.string.isRequired,  
};

export default FormInput;
