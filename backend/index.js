const express = require('express')
const dotenv = require('dotenv');
dotenv.config();

const { dbConnect } = require('./config/DB.js')

const app = express();

const PORT = process.env.PORT || 4000
dbConnect()

app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
})