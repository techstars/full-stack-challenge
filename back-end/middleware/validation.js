const isRequiredIdSchema = require('../schemas/idparams');
const createError = require('http-errors');

module.exports = {
    validate,
    idsSent
}

function validate(schema, property) {
    return async(req,res,next) => {
        const { error, value } = await schema.validate(req[property]);
        if(error){
            let message = error.details[0].message;
            next(createError(400, message));
        }else{
            req[property] = value; 
            next();
        }
    }
}

function idsSent(req,res,next){
    const ids = Object.keys(req.params).map(e => req.params[e]);
    const valid = ids.reduce((validity, id)=> {
        if(typeof validity == 'boolean'){
            const { error , value} = isRequiredIdSchema.validate(id);
            return error !== null && {error} || true;
        }else{
            return validity
        }
    },false);
    valid.error != null && typeof valid == 'object' &&
    res.status(400).json({isJoi : true, message: valid.error.details.map(x => x.message).join(', ')}) ||
    next();
}