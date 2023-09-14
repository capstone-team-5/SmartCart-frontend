//This component is for the user
import React from 'react';
import DeleteButtonComponent from './DeleteButtonComponent.jsx';
const UserComponent = () => {
    

    return (     
        
        <div>
            <h1 class="text-4xl"><strong>Account Settings</strong></h1>
            <br>
            </br>
            <h2 class="text-2xl">Account Information</h2>
            <br>
            </br>
            <label for="email">Email</label>
            <br></br>
            <input type="text" placeholder="" />
            <br></br>
            <label for="password">Password</label>
            <br></br>
            <input type="text" placeholder="" />
            <br></br>
            <h2 class="text-2xl">Personal Information</h2>
         
        
         
            <DeleteButtonComponent />
           
        </div>
    
    )
};

export default UserComponent;