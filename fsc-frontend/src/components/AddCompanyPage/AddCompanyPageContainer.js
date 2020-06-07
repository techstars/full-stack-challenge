import { connect } from 'react-redux';
import AddCompanyPage from './AddCompanyPage';
import { addCompany } from 'state/companies/actions';
import { selectTheme } from 'state/preferences/selectors'

const mapStateToProps = state => ({
  theme: selectTheme(state)
})

const mapDispatchToProps = {
  addCompany
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCompanyPage);
