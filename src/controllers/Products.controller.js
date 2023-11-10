const productModel = require("../models/ProductModel");

const controller = {};

controller.getAllProducts = async (req, res) => {
  const listProduct = await productModel.find();
  res.json(listProduct);
};

controller.saveProduct = async (req, res) => {
  try {
    const body = req.body;
    const newProduct = new productModel(body);

    await newProduct.save();
    res.send("Producto guardado con exito");
  } catch (error)     {
    res.status(500).send(error.message);
  }
};

module.exports = controller;
