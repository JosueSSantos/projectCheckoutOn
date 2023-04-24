const uuid  = require('uuid.v4');
const products =[];
class  NewProductController {

    newProduct(request, response){
    const  {    
        DESC        ,
        UNID_MEDIDA      ,
        DESC_GONDOLA     ,
        DESC_PDV         ,
        CODIGO_BARRAS    ,
        ID_FORNECEDOR    ,
        ID_GRUPO         ,
        ID_SUBGRUPO      ,
        ID_DPTO          ,
        ID_SECAO         ,
        ATIVO,
        UND_ATACADO
    } = request.body;   
    

    const  variabeis = {   
        ID: uuid()    ,
        DESC        ,
        UNID_MEDIDA      ,
        DESC_GONDOLA     ,
        DESC_PDV         ,
        CODIGO_BARRAS    ,
        ID_FORNECEDOR    ,
        ID_GRUPO         ,
        ID_SUBGRUPO      ,
        ID_DPTO          ,
        ID_SECAO         ,
        ATIVO,
        UND_ATACADO};

    products.push(variabeis);
    return response.status(201).send();
    };

    viewProduct(request, response){
        return response.json({products});
    }

}
module.exports  = NewProductController; 

