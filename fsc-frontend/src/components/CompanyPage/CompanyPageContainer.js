import { connect } from 'react-redux';
import { selectTheme } from 'state/preferences/selectors';
import { getOneCompany } from 'state/companyDetails/actions';
import CompanyPage from './CompanyPage';

const mapStateToProps = state => ({
  theme: selectTheme(state)
});

const mapDispatchToProps = {
  getOneCompany
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyPage);
