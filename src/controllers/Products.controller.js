const productModel = require("../models/ProductModel");
const ResponseStructure = require("../helpers/ResponseStructure");

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

    const response = new ResponseStructure(
      200,
      "Producto guardado exitosamemte",
      body
    );
    res.status(200).send(response);
  } catch (error) {
    const errorsCatch = error.errors;
    const errors = {};

    for (let i in errorsCatch) {
      errors[i] = errorsCatch[i].message;
    }
    const response = new ResponseStructure(
      500,
      "Error al guardar el producto",
      errors
    );
    res.status(500).json(response);
  }
};

module.exports = controller;
