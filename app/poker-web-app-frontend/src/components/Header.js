// Header.js
import React from "react";
import "./../css/header.css"; // Import the CSS file for styling

const Header = () => {
  return (
    <header className="header">
      {/* Add header content here */}
      <div className="logo">Poker Web App</div>
      <nav className="nav-links">
        {/* Add navigation links here */}
        {/* Add more links as needed */}
      </nav>
    </header>
  );
};

export default Header;
