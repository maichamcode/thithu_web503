


import mongoose from "mongoose";
const productModel = new mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    desc: {
        type: String
    },
    status: {
        type: Boolean
    },
    quan: {
        type: Number
    }
})

export default mongoose.model("Product", productModel)