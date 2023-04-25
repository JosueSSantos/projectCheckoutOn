const express = require('express');
const router =  new express.Router();
const NewDescriptionsProdutsController = require('../controllers/NewDescriptionsProductController');
const NewProductController = require('../controllers/NewProductController');


const newDescriptionsProduct = new NewDescriptionsProdutsController();
const newProductController =  new NewProductController();


//SECÂO
router.post('/newSection',(require, response )=>{
    newDescriptionsProduct.newSection(require, response);
});

router.get('/viewSection', (require, response)=>{
    newDescriptionsProduct.viewSection(require,response);
});



//DEPARTAMENTO
router.post('/newDepartment', (require, response) =>{
    newDescriptionsProduct.newDepartment(require, response);
});

router.get('/viewDepartment', (require, response) =>{
    newDescriptionsProduct.viewDepartment(require, response);
});


// PRODUTO
router.post('/newProduct', (request, response) =>{
    newProductController.newProduct(request, response);
});

router.get('/viewProduct',(request, response) =>{
    newProductController.viewProduct(request, response);
});

//FILIAL

router.post('/newFilial', (request,respose) =>  {
    newDescriptionsProduct.newFilial(request, respose);
});

router.get('/viewFilial', (request,respose) =>  {
    newDescriptionsProduct.viewFilial(request, respose);
});

module.exports = router;