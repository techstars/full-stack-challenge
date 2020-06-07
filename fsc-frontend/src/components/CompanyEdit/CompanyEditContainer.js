import { connect } from 'react-redux';
import { updateCompany } from 'state/companyDetails/actions';
import CompanyEdit from './CompanyEdit';

const mapDispatchToProps = {
  updateCompany
}

export default connect(null, mapDispatchToProps)(CompanyEdit);
