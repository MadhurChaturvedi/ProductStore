const express = require('express')
const dotenv = require('dotenv');
dotenv.config();

const { dbConnect } = require('./config/DB.js');
const { Product } = require('./model/product.js');
const app = express();
const PORT = process.env.PORT || 4000;
dbConnect();
app.use(express.json());

app.post("/product", async (req, res) => {
    const product = req.body
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: "please provide all firlds" })
    }
    const newProduct = new Product(product)
    try {
        await newProduct.save();
        res.status(201).json({ success: true, message: "Create Success", data: newProduct })
    }
    catch (e) {
        console.log("Error in create product", e);
        return res.status(500).json({ success: false, message: "Server Error" })
    }
})

app.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" })
    } catch (error) {
   
    }

})


app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
})