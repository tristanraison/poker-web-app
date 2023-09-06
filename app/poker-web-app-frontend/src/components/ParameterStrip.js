import React, { useState } from "react";
import "./../css/parameterStrip.css"; // Import your custom CSS for the parameter strip

const ParameterStrip = ({ onParametersChange }) => {
  const [numPlayers, setNumPlayers] = useState(6); // Default number of players

  const handleNumPlayersChange = (event) => {
    const newNumPlayers = parseInt(event.target.value);
    if (newNumPlayers >= 2 && newNumPlayers <= 6) {
      setNumPlayers(newNumPlayers);
      if (onParametersChange) {
        onParametersChange({ numPlayers: newNumPlayers });
      }
    }
  };

  return (
    <div className="parameter-strip">
      <div className="parameter">
        <label htmlFor="numPlayers">Number of Players:</label>
        <input
          type="number"
          id="numPlayers"
          value={numPlayers}
          onChange={handleNumPlayersChange}
        />
      </div>
      {/* Add more parameter inputs here */}
    </div>
  );
};

export default ParameterStrip;
