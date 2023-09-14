//This component is for the user
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
const UserComponent = () => {
   
    return (     
        
        <div>
            <h1 className="text-4xl"><strong>Account Settings</strong></h1>
            <br>
            </br>
            <h2 className="text-2xl">Account Information</h2>
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
            <h2 className="text-2xl">Personal Information</h2>
            <br></br>
            <label for="name">Name</label>
            <br></br>
            <input type="text" placeholder="" />
            <br></br>
            <label for="phone">Phone Number</label>
            <br></br>
            <input tpye="text" placeholder="xxx-xxx-xxxx" />
        </div>
    
    )
};

export default UserComponent;