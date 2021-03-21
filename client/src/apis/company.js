const COMPANY_BASE_URL = '/company';

const createCompany = async (axiosInstance, obj) => {
  return await axiosInstance.post(COMPANY_BASE_URL, obj);
};

const getCompanyById = async (axiosInstance, id) => {
  return await axiosInstance.get(`${COMPANY_BASE_URL}/${id}`);
}

const getAllCompanies = async (axiosInstance) => {
  return await axiosInstance.get(COMPANY_BASE_URL);
}

const updateCompanyById = async (axiosInstance, id, obj) => {
  return await axiosInstance.put(`${COMPANY_BASE_URL}/${id}`, obj);
}

const deleteCompanyById = async (axiosInstance, id) => {
  return await axiosInstance.delete(`${COMPANY_BASE_URL}/${id}`);
}

export {
  createCompany,
  getCompanyById,
  getAllCompanies,
  updateCompanyById,
  deleteCompanyById
};