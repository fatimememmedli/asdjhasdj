const mongoose = require("mongoose")
const Product  =require("./../models/model")

const getAllData = async (req, res) => {
	const Products = await Product.find()
    // console.log(Products)
	res.send(Products)
}
const getDataById = async (req, res) => {
	let id = req.params.id
	const ProductOne = await Product.findOne({id:id})
    // console.log(Product)
	res.send(ProductOne)
}
const postData = async (req, res) => {
	let post = req.body

	await  Product.save(post)
    
	console.log(Product)
}
module.exports = {getAllData,getDataById,postData}