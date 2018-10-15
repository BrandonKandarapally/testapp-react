import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="ui container">
    <h1> Wuss Poppin Jimbo </h1>
    <Link to="/login">Login</Link>
  </div>
);

export default HomePage;
