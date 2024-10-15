const express = require('express');
const { Product } = require('../model/product.js');
const mongoose = require('mongoose')
const router = express.Router();
const { getAllPorducts, createProducts, DeleteProducts, updateProducts } = require('../controllers/Products.js')

router.get("/", getAllPorducts)

router.post("/", createProducts)

router.delete("/:id", DeleteProducts)

router.put("/:id", updateProducts)


module.exports = { router }
