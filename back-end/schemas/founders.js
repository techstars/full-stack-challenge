const Joi = require('joi');

const createFounderSchema = Joi.object({
    full_name   : Joi.string().trim().required().label('Founder Full Name'),
    title       : Joi.string().trim().required().label('Founder Title'),
    company_id  : Joi.number().integer().required().label('Company Id'),
});

module.exports = { 
    createFounderSchema,
}