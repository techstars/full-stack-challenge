const selectCompanyDetailsState = state => state.selectCompanyDetailsState

export const selectCompanyDetails = state =>
  selectCompanyDetailsState(state) && selectCompanyDetailsState(state).data;

export const selectCompanyDetailsIsLoading = state =>
  selectCompanyDetailsState(state) && selectCompanyDetailsState(state).isLoading;

export const selectCompanyDetailsIsError = state =>
  selectCompanyDetailsState(state) && selectCompanyDetailsState(state).isError;

export const selectCompanyDetailsErrorMessage = state =>
  selectCompanyDetailsState(state) && selectCompanyDetailsState(state).errorMessage;
