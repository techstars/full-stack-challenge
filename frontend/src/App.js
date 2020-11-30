import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddCompany from "./components/Companys/AddCompany";
import EditCompany from "./components/Companys/EditCompany";
import Company from "./components/Companys/Company";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/company/add" component={AddCompany} />
          <Route exact path="/company/edit/:id" component={EditCompany} />
          <Route exact path="/company/:id" component={Company} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
