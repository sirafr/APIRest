//const { response } = require('express');

// Librabries
const express = require('express');
const faker = require('faker')


const app = express();
const port = 3000;

app.get('/',(req,res)=>{
  res.send('Hola es mi primer server en express')
});

app.get('/nueva-ruta',(req,res)=>{
  res.send('Hola, soy una nueva ruta');
});

// ESTATICOS VAN ANTES DE LOS DINAMICOS EN LOS ENDPOINTS
app.get('/products/filter',(req,res)=>{
  res.send('Soy un filter!');
})

// Agregamos datos al endpoint con faker, req.params y un limite
app.get('/products',(req,res)=>{
  const products = [];
  const {size} = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products)
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

// Parametros tipo query
app.get('/users',(req,res)=>{
  const {limit, offset} = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else{
    res.send("No hay parametros");
  }
})


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
