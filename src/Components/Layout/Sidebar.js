import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <Link to="/dashboard/overview">Overview</Link>
        <Link to="/dashboard/sales">Sales</Link>
        <Link to="/dashboard/customers">Customers</Link>
        <Link to="/dashboard/reports">Reports</Link>
        <Link to="/dashboard/settings">Settings</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
