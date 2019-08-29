import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import CompanyForm from '../components/CompanyForm';
import CompanyDetails from '../components/CompanyDetails';


document.addEventListener('DOMContentLoaded', () => {
    render(
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/companies" component={App} />
                <Route exact path="/new" component={CompanyForm} />
                <Route path="/:id" component={CompanyDetails} />
            </Switch>
        </Router>,
        document.querySelector('#root'),
    );
});


// <Switch>
{/* <Route component={NotFound} /> */}

//     <Route exact path="/" component={App} />
//     <Route path="/companies" component={App} />
//     <Route exact path="/new" component={CompanyForm} />
// </Switch>