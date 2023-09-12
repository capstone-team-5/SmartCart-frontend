//This component is for the user
import React from 'react';
import SearchComponent from './SearchComponent.jsx';
import DeleteButtonComponent from './DeleteButtonComponent.jsx';
const UserComponent = () => {
    return (
        <div>
            <SearchComponent />
            <DeleteButtonComponent />
            <h3>This is the user component</h3>
        </div>
    )
};

export default UserComponent;