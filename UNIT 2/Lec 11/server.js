const express = require('express');
const app = express();
const PORT = 3000;

app.get("/students/:name", (req,res)=>{
    console.log(req.url);
    console.log(req.params.name);
    console.log(req.method)
    req.send("Hello world!");
})

app.get('/students', (req, res) => {
    console.log(req.url);
    console.log(req.query.cgpa);
    res.send('Hello, World!');
});


app.listen(PORT, () => {
    console.log('Server is running');
});