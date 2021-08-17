import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="navContainer">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/terms">Terms</Link>
        </div>
    );
}

export default Nav;