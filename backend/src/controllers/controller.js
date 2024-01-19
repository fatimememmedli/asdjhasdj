const mongoose = require("mongoose");
const Product = require("./../models/model");

const getAllData = async (req, res) => {
  const Products = await Product.find();
  // console.log(Products)
  res.send(Products);
};
const getDataById = async (req, res) => {
  let id = req.params.id;
  const ProductOne = await Product.findOne({ id: id });
  // console.log(Product)
  res.send(ProductOne);
};
const postData = async (req, res) => {
  let newproduct = new Product(req.body);
  await newproduct.save();
  res.send(newproduct);
};
const deleteData = async (req, res) => {
  let id = req.params.id;
  let find = await Product.findOne({ id: id });
  let _id = find._id;
  let deleteProducct = await Product.findOneAndDelete({ _id });

  // console.log(find)
};
module.exports = { getAllData, getDataById, postData, deleteData };
