import React from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => (
  <nav className="space-x-4">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/programs">Programs</Link>
    <Link to="/donate">Donate</Link>
    <Link to="/get-involved">Get Involved</Link>
    <Link to="/news">News</Link>
    <Link to="/contact">Contact</Link>
  </nav>
);

export default Navigation;
