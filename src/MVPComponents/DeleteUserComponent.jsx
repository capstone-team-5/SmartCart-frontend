//This function will allow users to delete their account

import React from 'react';

const DeleteUserComponent = () => {
  // Function to handle user account deletion
  const handleDelete = () => {
    // Code to handle user account deletion here (e.g., Axios request to backend)
  };

  return (
    <div>
      <h3>Delete User Page</h3>
      <button onClick={handleDelete}>Delete My Account</button>
    </div>
  );
};

export default DeleteUserComponent;
