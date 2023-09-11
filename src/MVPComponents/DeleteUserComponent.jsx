//This function will allow users to delete their account
import React, { useState } from 'react';
import axios from 'axios';

/**
 * This component is responsible for handling user account deletion.
 * It includes a button to delete the user account, and handles the API communication for the deletion process.
 */
const DeleteUserComponent = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  /**
   * Handle the user account deletion process.
   */
  const handleDelete = async () => {
    const userId = localStorage.getItem('userId'); // Assuming the user's ID is stored in local storage
    if (!userId) {
      setMessage('User ID not found.');
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      const response = await axios.delete(`${process.env.REACT_APP_BACKEND_API}/users/delete/${userId}`);

      if(response.status === 200) {
        setMessage('Account deleted successfully!');
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
      <h3>Delete User Page</h3>
      <button onClick={handleDelete} disabled={loading}>Delete My Account</button>
      {message && <p>{message}</p>}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default DeleteUserComponent;
