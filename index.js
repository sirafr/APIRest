// MODULES
const express = require('express');
const routerApi = require('./routes');


const app = express();
const port = 3000;

// Regresamos en json la data en el Postman
app.use(express.json());

app.get('/',(req,res)=>{
  res.send('Hola es mi primer server en express')
});

app.get('/nueva-ruta',(req,res)=>{
  res.send('Hola, soy una nueva ruta');
});

app.get('/products',(req,res)=>{
  res.json({
    name:'Producto',
    price:'1000',

  });
});

app.get('/categories',(req,res)=>{
  res.json({
    categories : ['drama','anime','love']


  });
});

routerApi(app);

app.listen(port, () => {
  console.log('Mi puerto: '+port)
})
