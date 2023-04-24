const uuid  = require('uuid.v4');
const NewDescriptionsProduct  = require('./NewDescriptionsProductController');

const products =[];

class  NewProductController {


    newProduct(request, response){
    const  {    
        DESC        ,
        UNID_MEDIDA      ,
        CODIGO_BARRAS    ,
        ID_FORNECEDOR    ,
        ID_DPTO          ,
        ID_SECAO        ,
        URL

    } = request.body;   

    console.log(dateDepart);
    const  variabeis = {   
        ID: uuid()    ,
        DESC        ,
        UNID_MEDIDA      ,
        CODIGO_BARRAS    ,
        ID_FORNECEDOR    ,
        ID_DPTO          ,
        ID_SECAO         ,
        URL, 
        ATIVO: 1
    };


    products.push(variabeis);
    return response.status(201).send();
    };

    viewProduct(request, response){
        return response.json({products});
    }

}
module.exports  = NewProductController; 

