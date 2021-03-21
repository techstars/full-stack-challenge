const qp             = require('../db/connect').query
const tx 		     = require('../db/connect').tx
const FoundersHelper = require('./founders');
const CreateError    = require('http-errors'); 
const LocationHelper = require('./location');
const { 
    createLocation,
    updateLocation
 }    = require('./location');

module.exports = {
    createCompany,
    getAllCompanies,
    updateCompany,
    updateFounderInCompany,
    getCompanyBy,
    deleteCompanyBy
}

async function createCompany(data) {
    try{
        const updatedLocation = await createLocation(data);
        const sqlStr = `INSERT INTO companies(name, description, location_id , date_founded) ` +
                       `VALUES($1,$2,$3,$4) RETURNING *`;

        const values = [data.name, data.description, updatedLocation[0].id, data.date_founded];                  
        const updatedCompany = await qp(sqlStr, values);
        const {city, state} = updatedLocation[0];
        updatedCompany[0].city = city;
        updatedCompany[0].state = state;
        return updatedCompany;        
    }catch(error){
        console.log('Error: ', error);
        return Promise.reject(error);
    }
}

async function getAllCompanies() {
    const sqlStr = "SELECT C.id, C.name, C.description, C.date_founded, L.city, L.state " +
                   "FROM companies C "+
                   "JOIN location L ON C.location_id = L.id " +
                   "ORDER BY C.id";
    return qp(sqlStr);
}

async function getCompanyBy({id}) {
    const sqlStr = "SELECT C.name, C.description, C.date_founded, array_agg( COALESCE(row_to_json(F.*),'{}'::json)) AS founders, L.city, L.state " +
                   "FROM companies C " +
                   "JOIN location L ON C.location_id = L.id " + 
                   "LEFT JOIN founder F ON C.id = F.company_id " +
                   "WHERE C.id = $1 " +
                   "GROUP BY C.name, C.description, C.date_founded, L.city, L.state";
    return qp(sqlStr, [id]);
}

async function updateCompany(data) {
    const updateCompanySqlStr = "UPDATE companies SET name = $1, description = $2, date_founded = $3, date_updated = now()" + 
                                "WHERE id = $4 RETURNING *";
    const updatedCompany = await qp(updateCompanySqlStr, [data.name, data.description, data.date_founded, data.id]);
    const updatedLocation = await updateLocation({city : data.city, state : data.state, id : updatedCompany[0].location_id});
    const {city, state} = updatedLocation[0];
    updatedCompany[0].city = city;
    updatedCompany[0].state = state;
    return updatedCompany;
}

async function updateFounderInCompany({full_name, title, company_id}) {
    return FoundersHelper.createFounder({full_name, title, company_id});
}

async function deleteCompanyBy({id}){
    try{
        await qp("DELETE FROM founder WHERE company_id = $1",[id]);
        const sqlStr = "DELETE from companies " + 
                       "WHERE id = $1 RETURNING *";
        const deletedCompany = await qp(sqlStr,[id]);
        
        return LocationHelper.deleteLocationBy({id : deletedCompany[0].location_id});
    }catch(error) {
        console.log('Error: ', error); 
        return CreateError(500,error);
    }
}