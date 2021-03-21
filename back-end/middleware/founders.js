const qp             = require('../db/connect').query
const tx 		     = require('../db/connect').tx
const createError    = require('http-errors');

module.exports = {
    doesFounderExist,
}

async function doesFounderExist(req, res, next){
    try{
        let { full_name, title } = req.body;
        let { company_id } = req.params
        let formattedName = full_name.trim().toLowerCase().replace(/\s+/g,' ');
        let formattedTitle = title.trim().toLowerCase().replace(/\s+/g,' ');
        let doesFounderExist = await qp(`SELECT EXISTS(SELECT true FROM founder WHERE lower(full_name) = '${formattedName}' AND lower(title) = '${formattedTitle}')`);   

        if(doesFounderExist[0].exists){
            next(createError(400,'Founder already belongs to a company'));
        }else{
            next();
        }
    }catch(error){
        console.log('error: ', error);
        next(createError(500, error));  
    }
    
}