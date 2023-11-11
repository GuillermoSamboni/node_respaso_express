const productModel = require("../models/ProductModel");
const { ResponseStructure } = require("../helpers/ResponseStructure");

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

    ResponseStructure.status = 200;
    ResponseStructure.message = "Producto guardado exitosamemte";
    ResponseStructure.data = body;

    res.status(200).send(ResponseStructure);
  } catch (error) {
    const errorsCatch = error.errors;
    const errors = {};

    for (let i in errorsCatch) {
      errors[i] = errorsCatch[i].message;
    }

    ResponseStructure.status = 500;
    ResponseStructure.message = "Error al guardar el producto";
    ResponseStructure.data = errors;
    
    res.status(500).json(ResponseStructure);
  }
};

module.exports = controller;
