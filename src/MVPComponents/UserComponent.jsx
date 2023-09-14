//This component is for the user
import React from 'react';
import DeleteButtonComponent from './DeleteButtonComponent.jsx';
const UserComponent = () => {
    

    return (     
        
        <div>
            <h1 class="text-4xl"><strong>Account Settings</strong></h1>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
        
         
            <DeleteButtonComponent />
           
        </div>
    
    )
};

export default UserComponent;