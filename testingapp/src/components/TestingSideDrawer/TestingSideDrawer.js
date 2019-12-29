import React from 'react';
import { NavLink } from 'react-router-dom';

import './TestingSideDrawer.css';

const TestingSideDrawer = props => (
    <header className="testingSideDrawer">
        <nav className="testingSideDrawer_nav">
            <div></div>
            <div className="testingSideDrawer_logo">
                <NavLink to="/">THE LOGO</NavLink>
            </div>
            <div className="testingSideDrawer_nav_items">
                <NavLink to="/trades" activeClassName="selectedLink">Trades</NavLink>
                <NavLink to="/exceptions" activeClassName="selectedLink">Exceptions</NavLink>
                <NavLink to="/admin" activeClassName="selectedLink">Admin</NavLink>
            </div>
        </nav>
    </header>
);

export default TestingSideDrawer;