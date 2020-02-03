import axios from "axios";

const fetchCompanyList = async (payload = {}) => {
  const response = await axios.get(
    "http://localhost:3000/api/v1/companies"
  );
  return response.data;
};

const fetchCompanyDetails = async (payload = {}) => {
  const response = await axios.get(
    "http://localhost:3000/api/v1/companies/"+ payload.companyId
  );
  return response.data;
};

const addNewCompany = async (payload = {}) => {
  const response = await axios.post("http://localhost:3000/api/v1/companies", { ...payload });
  return response.data;
};

const addNewFounder = async (payload = {}) => {
  const response = await axios.post("http://localhost:3000/api/v1/founders/", { ...payload });
  return response.data;
};
const updateCompanyDetails = async (payload = {}) => {
  const response = await axios.patch(
    "http://localhost:3000/api/v1/companies/"+ payload.id, { ...payload },
  );
  return response.data;
};
const deleteCompany = async (payload = {}) => {
  const response = await axios.delete(
    "http://localhost:3000/api/v1/companies/"+ payload.companyId
  );
  return response.data;
};
const fetchFoundersByCompany = async (payload = {}) => {
  const response = await axios.get(
    "http://localhost:3000/api/v1/companies/"+ payload.id + "/founders"
  );
  return response.data;
};

export default {
  fetchCompanyList,
  addNewCompany,
  addNewFounder,
  fetchCompanyDetails,
  deleteCompany,
  updateCompanyDetails,
  fetchFoundersByCompany
};
