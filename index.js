//const { response } = require('express');

// MODULES
const express = require('express');
const routerApi = require('./routes');


const app = express();
const port = 3000;

app.get('/',(req,res)=>{
  res.send('Hola es mi primer server en express')
});

app.get('/nueva-ruta',(req,res)=>{
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

/*
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
*/

app.listen(port, () => {
  console.log('Mi puerto: '+port)
})
