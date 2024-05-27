const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://erikantunes94:Brasil2025@starwars-api.faldoar.mongodb.net/?retryWrites=true&w=majority&appName=starwars-api');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Error connecting to MongoDB', error);
        process.exit(1);
    }
};

module.exports = connectDB;