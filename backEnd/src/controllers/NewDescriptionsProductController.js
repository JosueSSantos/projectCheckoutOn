const uuid = require('uuid.v4');
const depart = [];
const section =[];

class NewDescriptionsProdutsController {
    newDepartment(require,response){
        const bodyDepartament = {id: '', desc: '', ativo: '', setor: ''};
        depart.push(bodyDepartament);
        const {id, desc, setor } = require.body;
        
        
        const validateSection =    section.find(element => element  = setor );
        const validateDepart = depart.find(element => element = id);   

        console.log(validateDepart);

        if(validateDepart.id === depart.find(element => element = id)){
            return response.json({error: "ID ou nome de Departamento Já criado,tente novamente !!"});
        };
        console.log(validateSection);
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

        return response.status(201).send();
    };

    viewSection(require, response){
        return response.json({section});
    }

};
module.exports = NewDescriptionsProdutsController;
