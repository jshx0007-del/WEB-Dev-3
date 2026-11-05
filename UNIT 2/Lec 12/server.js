const express=require("express");
const app = express();
const productRoutes = require("./routes/productRoutes.js");

const PORT = 3000;

app.use(express.json());
app.use("/api/products", productRoutes);

app.listen(PORT, ()=>console.log("Server is running on port "+PORT));