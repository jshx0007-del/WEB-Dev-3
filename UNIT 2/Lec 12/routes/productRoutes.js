const express=require("express");
const router = express.Router();

const productController = require("../controller/productController.js");


router.get("/search",productController.searchProduct);  // search operation
router.get("/", productController.getProducts);  // read operation

router.get("/:id", productController.getProductById);  // read individual operation


router.post("/",productController.addProduct);  // create operation

router.put("/:id",productController.updateProduct);  // update operation

router.delete("/:id",productController.deleteProduct);  // delete operation

module.exports = router;