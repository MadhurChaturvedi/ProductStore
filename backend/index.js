const express = require('express')
require('dotenv').config()


const { dbConnect } = require('./config/DB.js');
const { router } = require('./routes/product.router.js');
const app = express();
const PORT = process.env.PORT || 4000;
dbConnect();
app.use(express.json());
app.use("/api/products", router)
// app.use("/api/products")

const port = process.env.PORT
console.log(port);


app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
})