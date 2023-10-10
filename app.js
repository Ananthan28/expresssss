const express = require('express');
const app = express();
const path= require('path');
const port = 3000;

// app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'home.html'));
})
app.get('/product',(req,res)=>{
    res.sendFile(path.join(__dirname,'product.html'));
})
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'about.html'));
})
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'contact.html'));
})
app.get('/products',(req,res)=>{
    res.send('All Products')
})
app.get('/products/laptops',(req,res)=>{
    res.send('All Laptops')
})
app.get('/products/mobiles',(req,res)=>{
    res.send('All mobiles')
})
app.listen(port, ()=>{
    console.log(`App listening on port: ${port}`);
})

