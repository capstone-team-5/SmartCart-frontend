//This component is for the user
import React from 'react';
import { useState } from 'react';
import DeleteButtonComponent from './DeleteButtonComponent';
const UserComponent = () => {
    const [formData, setFormData] = useState({
        user_email:'', 
        password:'', 
        name:'', 
        phone:''
    });
    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

        
    return (     
        
        <div>
            <h1 className="text-4xl"><strong>Account Settings</strong></h1>
            <br />
            <h2 className="text-2xl">Account Information</h2>
            <br />
            <label htmlFor="email">Email</label>
            <br />
            <input type="text" 
            placeholder=""
            name="email"
            value={formData.user_email} 
            onchange={handleTextChange}/>
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input type="text" 
            placeholder="" 
            name="password"
            value={formData.password} 
            onChange={handleTextChange}/>
            <br />
            <h2 className="text-2xl">Personal Information</h2>
            <br />
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" 
            placeholder=""
            name="name" 
            value={formData.name} 
            onChange={handleTextChange} />
            <br />
            <label htmlFor="phone">Phone Number</label>
            <br />
            <input type="text" 
            placeholder="xxx-xxx-xxxx"
            name="phone" 
            value={formData.phone} 
            onChange={handleTextChange} />
            <br />
            

            <DeleteButtonComponent />
        </div>
    
    )
};

export default UserComponent;
