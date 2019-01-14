class Validator{
    fields(request, response){     
        request.assert('titulo', 'O título é obrigatório').notEmpty()
        request.assert('preco', 'O preco é obrigatório').isFloat()
        const errors = request.validationErrors()
        if(errors){
            return response.status(400).json({errors})
        }
    }
    id(id){     
        if(!id){
            const errors = {
                'id': 'O id é obrigatório'
            }
            return response.status(400).json({errors})
        }
    }
}

module.exports = new Validator