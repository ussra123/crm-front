import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <Link to="/">CRM Dashboard</Link>
      </div>
      <nav className="header-nav">
        <Link to="/dashboard/overview">Overview</Link>
        <Link to="/dashboard/reports">Reports</Link>
        <Link to="/dashboard/settings">Settings</Link>
      </nav>
    </header>
  );
};

export default Header;