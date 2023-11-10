const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/crud_node_expres", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((error) => {
    console.log("Error: " + error);
  });
