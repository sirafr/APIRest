const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
  res.send('Hola es mi primer server en express')
});

app.listen(port, () => {
  console.log('Mi puerto: '+port)
})
