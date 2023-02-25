require('dotenv').config();
require('express-async-errors');
const express = require('express');
const cors = require('cors');
// DB
require('./db/connection');
// security packages
const helmet = require('helmet');
const xss = require('xss-clean');

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(xss());
// routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server is running on port ${port}...`));
