import IndexPage from './IndexPage';
import { connect } from 'react-redux';
import { selectTheme } from 'state/preferences/selectors';
import {
  selectCompanies,
  selectCompaniesIsLoading,
  selectCompaniesIsError,
  selectCompaniesErrorMessage
} from 'state/companies/selectors';
import { getCompanies } from 'state/companies/actions';

const mapStateToProps = state => ({
  theme: selectTheme(state),
  companies: selectCompanies(state),
  companiesIsLoading: selectCompaniesIsLoading(state),
  companiesIsError: selectCompaniesIsError(state),
  companiesErrorMessage: selectCompaniesErrorMessage(state)
});

const mapDispatchToProps = {
  getCompanies
}


export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
