const { Product } = require('../model/product.js');
const mongoose = require('mongoose')


const getAllPorducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(201).json({ success: true, data: products })
    } catch (error) {
        console.log("error");
        res.status(500).json({ success: false, message: "Server Error" })
    }
}

const createProducts = async (req, res) => {
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
}

const DeleteProducts = async (req, res) => {
    const { id } = req.params;
    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted" })
    } catch (error) {

    }
}

const updateProducts = async (req, res) => {
    const { id } = req.params;
    const product = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid Product Id" })
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(201).json({ success: true, message: "Product Updated", data: updatedProduct })
    }
    catch (e) {
        console.log("Error in create product", e);
        return res.status(500).json({ success: false, message: "Server Error" })
    }
}

module.exports = { getAllPorducts, createProducts, DeleteProducts, updateProducts }