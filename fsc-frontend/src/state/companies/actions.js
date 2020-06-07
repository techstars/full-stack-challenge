import { getRequest } from 'util/api';

export const LOAD_COMPANIES = 'LOAD_COMPANIES';
export const SAVE_COMPANIES = 'SAVE_COMPANIES';
export const ERROR_COMPANIES = 'ERROR_COMPANIES';

export const getAllCompanies = () => async dispatch => {
  dispatch({ type: LOAD_COMPANIES });
  try {
    const response = await getRequest('companies');
    dispatch({ type: SAVE_COMPANIES, payload: response });
    return response;
  } catch (error) {
    return dispatch({ type: ERROR_COMPANIES, payload: error });
  }
}
