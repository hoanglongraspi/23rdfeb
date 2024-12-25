const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Hoanglong:CaHfuIrH6UWepsTr@cluster0.eq6tv.mongodb.net/gallery', {
    serverSelectionTimeoutMS: 5000, // Add timeout
    connectTimeoutMS: 10000,        // Add connection timeout
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;