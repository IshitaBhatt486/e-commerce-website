const dotenv = require('dotenv');
dotenv.config();

const express =require('express');
const cors= require('cors');
const authRoutes = require('./routes/authRoutes');

const connectDB = require('./config/db');
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => { 
    res.send("Working. Yayy!");
});

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});