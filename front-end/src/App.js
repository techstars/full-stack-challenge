import {Switch, Route} from 'react-router-dom'
import CompanyList from './components/companyList/companyList';
import CreateCompanyForm from './components/companyCreateForm/createCompanyForm';
import CompanyDetail from './components/companyDetail/companyDetail';
import NotFound from './components/notFound/notFound';
import './App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={CompanyList} / >
        <Route exact path="/create-company" component={CreateCompanyForm} />
        <Route exact path="/company-detail/:id" component={CompanyDetail} />
        <Route component={NotFound} />
      </Switch>
    </main>
  )
}

export default App;
