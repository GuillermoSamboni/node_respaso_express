const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  nameProduct: {
    type: String,
    required: [true, "Nombre producto es requerido"],
  },
  price: {
    type: Number,
    required: [true, "El precio es requerido"],
    min: [1000, "El precio debe ser superior a mil pesos"],
    max: [1000000, "El precio debe ser inferior a 1 millon"],
  },
  category: {
    type: String,
    ref: "Categories",
    required: [true, "La categoria es requerida"],
  },
  description: {
    type: String,
    required: [true, "La descripcion es requerida"],
    minLenght: [10, "La descripcion debe tener al menos 10 caracteres"],
    maxLenght: [200, "La descripcion no debe tener mas de 200 caracteres"],
  },
});

module.exports = model("product", productSchema, "productos");
