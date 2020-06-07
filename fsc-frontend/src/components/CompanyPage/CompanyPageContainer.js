import { connect } from 'react-redux';
import { selectTheme } from 'state/preferences/selectors';
import { getOneCompany, updateCompany, addFounder } from 'state/companyDetails/actions';
import CompanyPage from './CompanyPage';
import { selectCompanyDetails } from 'state/companyDetails/selectors';

const mapStateToProps = state => ({
  theme: selectTheme(state),
  companyDetails: selectCompanyDetails(state)
});

const mapDispatchToProps = {
  getOneCompany,
  updateCompany,
  addFounder
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyPage);
