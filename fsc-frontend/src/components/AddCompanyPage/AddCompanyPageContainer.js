import { connect } from 'react-redux';
import AddCompanyPage from './AddCompanyPage';
import { addCompany } from 'state/companies/actions';

const mapDispatchToProps = {
  addCompany
}

export default connect(null, mapDispatchToProps)(AddCompanyPage);
