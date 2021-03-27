const COMMON_BASE_URL = '/common';

const getCompanyAndFoundersByCompanyId = async (axiosInstance, id) => {
  return await axiosInstance.get(`${COMMON_BASE_URL}/${id}`);
};

export {
  getCompanyAndFoundersByCompanyId
}