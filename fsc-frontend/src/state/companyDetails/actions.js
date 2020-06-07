import { getRequest } from "util/api";

export const LOAD_COMPANY_DETAILS = 'LOAD_COMPANY_DETAILS';
export const SAVE_COMPANY_DETAILS = 'SAVE_COMPANY_DETAILS';
export const ERROR_COMPANY_DETAILS = 'ERROR_COMPANY_DETAILS';

export const getOneCompany = id => async dispatch => {
  dispatch({ type: LOAD_COMPANY_DETAILS });
  try {
    const response = await getRequest(`companies/${id}`);
    dispatch({ type: SAVE_COMPANY_DETAILS, payload: response });
    return response;
  } catch (err) {
    return dispatch({ type: ERROR_COMPANY_DETAILS, payload: err });
  }
}
