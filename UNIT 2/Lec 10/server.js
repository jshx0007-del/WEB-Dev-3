const express=require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const products = [
    {
        id:1,
        name:"Laptop",
        price:80000
    },
    {
        id:2,
        name:"Mouse",
        price:2000
    },
    {
        id:3,
        name:"Keyboard",
        price:3000
    }
];

app.get("/api/products",(req,res)=>{  // read operation
    res.json(products);
});

app.get("/api/products/:id",(req,res)=>{  // read operation
    const id = req.params.id;
    console.log(id);
    const result = products.find((product)=>product.id==id);
    res.json(result)
    if (result==undefined){
        res.status(404).json({success:false,message:"Product not found"});
    }
    res.json({success:true,message:"Product found"});
})

app.post("/api/products",(req,res)=>{  // create operation
    const product = req.body;
    products.push(product);
    res.json({success:true,product});
});

app.put("/api/products/:id",(req,res)=>{  // update operation
    const id = req.params.id;
    const product = req.body;
    const result = products.find((product)=>product.id==id);
    if (result==undefined){
        res.status(404).json({success:false,message:"Product not found"});
    }
    result.name = product.name;
    result.price = product.price;
    res.json({success:true,result});
})

app.delete("/api/products/:id",(req,res)=>{  // delete operation
    const id = req.params.id;
    const result = products.find((product)=>product.id==id);
    if (result==undefined){
        res.status(404).json({success:false,message:"Product not found"});
    } 
    const index = products.indexOf(result);
    products.splice(index,1);
    res.json({success:true, result});
})


app.listen(PORT, ()=>console.log("Server is running"));