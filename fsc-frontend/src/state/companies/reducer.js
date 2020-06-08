import { LOAD_COMPANIES, ERROR_COMPANIES, SAVE_COMPANIES, ADD_COMPANIES } from './actions';

const initialState = {
  companies: [],
  isLoading: false,
  isError: false,
  errorMessage: null,
  data: []
}

const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMPANIES:
      return {
        ...state,
        isLoading: true,
        isError: false,
        errorMessage: null
      }
    case SAVE_COMPANIES:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: null,
        data: action.payload
      }
    case ADD_COMPANIES:
      return {
        ...state,
        isLoading: false,
        isError: false,
        errorMessage: null,
        data: [...state.companies.data, action.payload]
      }
    case ERROR_COMPANIES:
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}

export default companiesReducer;
