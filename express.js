const express=require('express');
const app=express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello vamsi...");
})

const products= [
    {
        id:1,
        name:"vamsi"
    },
    {
        id:2,
        name:"vams"
    },
    {
        id:3,
        name:"vam"
    }
]

app.get('/products',(req,res)=>{
    res.json(products)
})

app.get('/products/:id',(req,res)=>{
    const newData=products.filter(items=>items.id.toString()===req.params.id);
    return res.json(newData);
})


app.post('/addproducts',(req,res)=>{
    const {id,name}=req.body;
    console.log(id,name);
    return res.send("data stored..");
})
app.listen(5001,()=>console.log("server running.."));