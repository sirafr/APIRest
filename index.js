const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
  res.send('Hola es mi primer server en express')
});

app.get('/nueva-ruta',(req,res)=>{
  res.send('Hola, soy una nueva ruta');
});

app.get('/products',(req,res)=>{
  res.json([
    {
      name:'Producto 1',
      price: 1000
    },
    {
      name:'Producto 2',
      price:2000
    }
  ]);
});

// Agregamos un endpoint con un id
app.get('/products/:id',(req,res)=>{
  const { id }= req.params;
  res.json({
      id,
      name:'Producto 2',
      price:2000
    });
});

// Con 2 parametros en el endpoint
app.get('/categories/:categoryId/products/:productId',(req,res)=>{
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
  });
})


app.listen(port, () => {
  console.log('Mi puerto: '+port)
})
