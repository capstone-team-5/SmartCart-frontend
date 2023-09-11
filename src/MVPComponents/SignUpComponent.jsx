//This is the sign-up page
import React, { useState } from 'react';
import axios from 'axios';

/**
 * This component is responsible for user sign up.
 * It includes form inputs for username, email, and password, and a button to submit the form.
 */
const SignUpComponent = () => {
  const [formData, setFormData] = useState({
    id: Math.random().toString(36).substr(2, 9), // Generate a random ID. Replace with an appropriate method to obtain an ID
    username: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  /**
   * Handle input field changes and update the form data state.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /**
   * Handle form submission to initiate user sign up.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_API}/signup`, formData);

      if(response.status === 200) {
        setMessage('Signup successful!');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage(`Error: ${error.response ? error.response.data : 'Could not connect to server'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Sign Up Page</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} disabled={loading} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} disabled={loading} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} disabled={loading} />
        </label>
        <br />
        <button type="submit" disabled={loading}>Sign Up</button>
      </form>
      {message && <p>{message}</p>}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default SignUpComponent;
