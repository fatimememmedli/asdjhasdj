const mongoose = require("mongoose")

const schema = mongoose.Schema({
	title: String,
	content: String,
},
{
    collection:"products"
})
const products = mongoose.model("products", schema)
module.exports = products