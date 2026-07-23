const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const contactRoute = require('./routes/contact');
app.use('/api/contact', contactRoute);

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/portfolio', {
    // Mongoose 6+ doesn't need useNewUrlParser/useUnifiedTopology but keeping for backward compat if old version is used
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error:', err));

// Basic health check
app.get('/', (req, res) => {
    res.send('Portfolio API is running...');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
