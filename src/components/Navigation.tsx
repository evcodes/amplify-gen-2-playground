import * as React from "react";
import { Link } from 'react-router-dom';
import './navigation.css'
 const Navigation = () => {
    return (
        <div className="navigation-container">
            <Link to="/">
                <h1>Logo</h1>
            </Link>
            <div className = "navigation-links-container">
                <Link to="/customers">Customers</Link>
                <Link to="/payments">Payments</Link>
                <Link to="/units">Units</Link>
                <Link to="/map">Map</Link>
            </div>
        </div>
    );
};

export default Navigation;