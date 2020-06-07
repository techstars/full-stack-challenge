export const selectCompaniesState = state => state.companies;

export const selectCompanies = state =>
  selectCompaniesState(state) && selectCompaniesState(state).data;

export const selectCompaniesIsLoading = state =>
  selectCompaniesState(state) && selectCompaniesState(state).isLoading;

export const selectCompaniesIsError = state =>
  selectCompaniesState(state) && selectCompaniesState(state).isError;

export const selectCompaniesErrorMessage = state =>
  selectCompaniesState(state) && selectCompaniesState(state).errorMessage;
