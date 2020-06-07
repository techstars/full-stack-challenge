import { connect } from 'react-redux';
import App from './App';
import { selectTheme } from 'state/preferences/selectors';

const mapStateToProps = state => ({
  theme: selectTheme(state)
});

export default connect(mapStateToProps)(App);
