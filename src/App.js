<<<<<<< HEAD
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CompaniesList from './screens/CompaniesList/CompaniesList';
import CompanyDetails from './screens/CompanyDetails/CompanyDetails'

function App() {
  return (
    <div className='app'>
      <Router>
        <Switch>
          <Route path="/" exact={true} component={CompaniesList}/>
          <Route path="/Details" component={CompanyDetails} />
        </Switch>
      </Router>
    </div>
  )
}
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

>>>>>>> 9f28bd4... Initialize project using Create React App
export default App;
