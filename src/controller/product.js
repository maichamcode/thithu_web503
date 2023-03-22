

import Joi from "joi";
import Product from "../model/product";

//them
const productValidate = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    desc: Joi.string().required(),
    status: Joi.boolean().required(),
    quan: Joi.number().required()
})
export const create = async (req, res) => {
    try {
        const body = req.body;
        const { error } = productValidate.validate(body)
        if (error) {
            const errors = error.details.map((item) => item.message);
            return res.status(401).json({
                message: errors
            })
        }
        const data = await Product.create(body);
        if (!data) {
            return res.status(401).json({
                message: "K dc de trong"
            })
        }
        return res.status(201).json({
            message: "Them thanh cong",
            data
        })
    } catch (error) {
        return res.status(401).json({
            message: "Them that bai",
            error
        })
    }
}

//getAll 

export const getAll = async (req, res) => {
    try {
        const data = await Product.find();
        return res.json({
            message: "Danh sach san pham",
            data
        })
    } catch (error) {
        return res.json({
            message: "Khong thay san pham nao",
            error
        })
    }
}

// getOne
export const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findById(id);
        return res.json({
            message: "Tim that 1 san pham",
            data
        })
    } catch (error) {
        return res.json({
            message: "Khong thay 1 san pham nao",
            error
        })
    }
}

// update
export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const data = await Product.findByIdAndUpdate(id, body, { new: true })
        res.json({
            message: "Sua thanh cong",
            data
        })
    } catch (error) {
        return res.json({
            message: "Sua that bai",
            error
        })
    }
}

//xoa

export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Product.findByIdAndDelete(id);
        res.json({
            message: "Xoa thanh cong"
        })
    } catch (error) {
        return res.json({
            message: "Xoa that bai",
            error
        })
    }
}