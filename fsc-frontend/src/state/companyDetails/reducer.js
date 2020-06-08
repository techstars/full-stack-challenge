import { LOAD_COMPANY_DETAILS, SAVE_COMPANY_DETAILS, ERROR_COMPANY_DETAILS, DELETE_COMPANY_DETAILS } from './actions';

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: null,
  data: {}
}

const companyDetailsReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOAD_COMPANY_DETAILS:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: null
      }
    case SAVE_COMPANY_DETAILS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: null,
        data: action.payload
      }
    case ERROR_COMPANY_DETAILS:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload
      }
    case DELETE_COMPANY_DETAILS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: {}
      }
    default: 
      return state;
  }
}

export default companyDetailsReducer;
