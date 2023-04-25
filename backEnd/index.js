const express  = require('express');
const path = require('path');
const app = express();
const port =  3030;


app.use(express.json());

app.use(require('./src/routes'));
app.listen(port, ()=> {console.log("Servidor iniciado http://localhost:3030/")})

