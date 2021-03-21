const FOUNDER_BASE_URL = '/founder';

const createFounder = async (axiosInstance, obj) => {
  return await axiosInstance.post(FOUNDER_BASE_URL, obj);
};

const getFoundersByCompanyId = async (axiosInstance, id) => {
  return await axiosInstance.get(`${FOUNDER_BASE_URL}/${id}`);
}

export {
  createFounder,
  getFoundersByCompanyId
}