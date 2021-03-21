import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import './App.css';

const routes = [
  {
    path: "/",
    exact: true,
    view: () => <Redirect to="/dashboard" />
  },
  {
    path: "/dashboard",
    exact: true,
    view: Dashboard
  }
];

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Switch location={location}>
          {routes.map((route, index) => {
            return (
              <Route
                exact={route.exact}
                path={route.path}
                render={({match}) => <route.view match={match}/>}
                key={index}
              />
            );
          })}
        </Switch>
    </div>
  );
}

export default App;
