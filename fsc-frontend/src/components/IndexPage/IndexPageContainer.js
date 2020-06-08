import IndexPage from './IndexPage';
import { connect } from 'react-redux';
import { selectTheme } from 'state/preferences/selectors';
import {
  selectCompanies,
  selectCompaniesIsLoading,
  selectCompaniesIsError,
  selectCompaniesErrorMessage
} from 'state/companies/selectors';
import { getAllCompanies } from 'state/companies/actions';

const mapStateToProps = state => ({
  theme: selectTheme(state),
  companies: selectCompanies(state),
  companiesIsLoading: selectCompaniesIsLoading(state),
  companiesIsError: selectCompaniesIsError(state),
  companiesErrorMessage: selectCompaniesErrorMessage(state)
});

const mapDispatchToProps = {
  getAllCompanies
}


export default connect(mapStateToProps, mapDispatchToProps)(IndexPage);
