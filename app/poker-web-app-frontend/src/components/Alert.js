import React from "react";
import "./../css/alert.css";

const Alert = ({ title, message, onClose }) => {
  const handleClickOutside = (e) => {
    if (e.target.classList.contains("custom-alert")) {
      onClose();
    }
  };

  return (
    <div className="custom-alert" onClick={handleClickOutside}>
      <div className="custom-alert-content">
        <h4>{title}</h4>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Alert;
