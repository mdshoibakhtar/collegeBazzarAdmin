// Sidebar.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate()
    const navigator = () => {
        navigate('New-TemplateForm')
    }
    return (
        <div className="sidebar">
            <button onClick={navigator}>Add Wa Templates</button>
            {/* <button>Optin Management</button>
            <button>WA Blocklist</button> */}
            {/* Add image/icon here */}
        </div>
    );
}

export default Sidebar;
