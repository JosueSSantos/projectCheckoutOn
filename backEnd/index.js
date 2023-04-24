const express  = require('express');
const app = express();
app.use(express.json());
const port =  3030;
const NewDescriptionsProdutsController = require("./src/controllers/NewDescriptionsProductController");
const NewProductController = require('./src/controllers/NewProductController');


const newDescriptionsProduct = new NewDescriptionsProdutsController();
const newProductController =  new NewProductController();


//SECÂOas
app.post('/newSection',(require, response )=>{
    newDescriptionsProduct.newSection(require, response);
});

app.get('/viewSection', (require, response)=>{
    newDescriptionsProduct.viewSection(require,response);
});



//DEPARTAMENTO
app.post('/newDepartment', (require, response) =>{
    newDescriptionsProduct.newDepartment(require, response);
});

app.get('/viewDepartment', (require, response) =>{
    newDescriptionsProduct.viewDepartment(require, response);
});


// PRODUTO
app.post('/newProduct', (request, response) =>{
    newProductController.newProduct(request, response);
});

app.get('/viewProduct',(request, response) =>{
    newProductController.viewProduct(request, response);
});

app.listen(port, ()=> {console.log("Servidor iniciado http://localhost:3030/")})

