import { connect } from 'react-redux';
import { selectTheme } from 'state/preferences/selectors';
import { setTheme } from 'state/preferences/actions';
import Navbar from './Navbar';

const mapStateToProps = state => ({
  theme: selectTheme(state)
});

const mapDispatchToProps = {
  setTheme
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
