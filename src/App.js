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
export default App;
