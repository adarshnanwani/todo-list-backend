const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({
  path: './config/config.env',
});

// Connect to DB
connectDB();

const app = express();

// Use body-parser
app.use(express.json());

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}!`);
});

server.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);

  server.close(() => process.exit());
});
