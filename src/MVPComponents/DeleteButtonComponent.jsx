//This function is a delete button
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const DeleteButtonComponent = () => {
    
    const { id } = useParams();
    const navigate = useNavigate();

    const handleDelete = (e) => {
        e.preventDefault();
        // Code to handle the delete action goes here
       const confirmed = window.confirm("Are you you want to delete this user profile?")
       if(confirmed) {
        axios.delete(`${process.env.REACT_APP_BACKEND_API}/shopper/${id}`)
            .then(() => {
                alert("User Profile Deleted");
                navigate(`/shopper`);
            }
            )
            .catch(() => {
                alert("User Profile Not Deleted")
               
            }
            );

    }
}
    return (
        <div>
            <button onClick={handleDelete}>Delete</button>
          
        </div>
    )
}
export default DeleteButtonComponent;
