// index.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001; // Use the port 3000 or the environment port if available

app.use(express.json()); // Parse JSON request bodies

// Basic endpoint to check if the server is running
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
