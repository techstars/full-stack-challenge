const Joi = require('joi');

const createCompanySchema = Joi.object({
    name        : Joi.string().trim().required().label('Company Name'),
    description : Joi.string().trim().required().label('Company Description'),
    city        : Joi.string().trim().required().label('Company City'),
    state       : Joi.string().trim().required().label('Company State'),
    date_founded: Joi.date().optional().allow(null).allow("").default(null).label('Company Date Founded'),
});

module.exports = { 
    createCompanySchema,
}