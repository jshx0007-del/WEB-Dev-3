const products = require("../data/data.js");

const getProducts = (req,res)=>{  // read operation
    res.json(products);
}

const getProductById = (req,res)=>{  // read operation
    const id = req.params.id;
    console.log(id);
    const result = products.find((product)=>product.id==id);
    res.json(result)
    if (result==undefined){
        res.status(404).json({success:false,message:"Product not found"});
    }
    res.json({success:true,message:"Product found"});
}

const addProduct = (req,res)=>{  // create operation
    const product = req.body;
    products.push(product);
    res.json({success:true,product});
}

const updateProduct = (req,res)=>{  // update operation
    const id = req.params.id;
    const product = req.body;
    const result = products.find((product)=>product.id==id);
    if (result==undefined){
        res.status(404).json({success:false,message:"Product not found"});
    }
    result.name = product.name;
    result.price = product.price;
    res.json({success:true,result});
}

const deleteProduct= (req,res)=>{  // delete operation
    const id = req.params.id;
    const result = products.find((product)=>product.id==id);
    if (result==undefined){
        res.status(404).json({success:false,message:"Product not found"});
    } 
    const index = products.indexOf(result);
    products.splice(index,1);
    res.json({success:true, result});
}

const searchProduct = (req,res)=>{  // search operation
    const {name,price} = req.query;
    if (name){
        result = products.filter((product)=>product.name.toLowerCase().includes(name.toLowerCase()));
    }
    if (price){
        result = products.filter((product)=>product.price==price);
    }
    res.json({total:result.length , result});
}

module.exports = {getProducts,getProductById,addProduct,updateProduct,deleteProduct,searchProduct};