const express = require('express');
const filmRoutes = require('./routes/filmRoutes');
const connectDB = require('./database');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(express.json());
app.use('/films', filmRoutes);

const initializeApp = async () => {
    await connectDB();
};

app.use(errorHandler);

module.exports = { app, initializeApp };