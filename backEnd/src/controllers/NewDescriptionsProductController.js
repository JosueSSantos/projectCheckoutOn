const uuid = require('uuid.v4');
const depart = [];
const section =[];
const fil =   [];

class NewDescriptionsProdutsController {

    newDepartment(require,response){
        const {id, desc, setor } = require.body;
        
        
        const validateSection =    section.find(element => element  = setor );

        console.log(id);
        if(!id || !desc, !setor ){
            return response.json({error: `Erro ao criar Departamento sem info de ${id, desc, setor}`});
        
        }
        if(validateSection){
            const bodyDepartament = {id, desc, ativo: 1, setor};
            depart.push(bodyDepartament);

            return response.status(201).send();

        }else{
            return response.json({error: 'Seção não criada'});
        };
    };
    viewDepartment(require, response){
       return response.json({depart});
    }
    newSection(require,response){

        const {desc  } = require.body;
        if( !desc ){
            return response.json({error: `Erro ao criar Secão sem info de ${desc}`});
        };

        const bodySection =  {id: uuid(),  desc, ativo: 1 }

        section.push(bodySection);

        return response.json({bodySection});
        
    };

    viewSection(require, response){
        return response.json({section});
    };

    newFilial(request, response){
        const  {id, desc, cnpj, idUf, idCity } = request.body;
        let variabeis = {id, desc, cnpj, idUf, idCity};
        fil.push(variabeis);

        return response.status(201).send();
    };

    viewFilial(request, response){
        return response.json({fil});
    }

};
module.exports = NewDescriptionsProdutsController;
