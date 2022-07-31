const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const { errorHandler } = require('../backend/middleware/errorMiddleware');
const app = express();
const connectDB = require('./config/db');
var colors = require('colors');

// Connect to database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to the Support Desk API' });
});

app.use('/api/users', require('./routes/UserRoutes'));
app.use('/api/tickets', require('./routes/TicketRoutes'));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
