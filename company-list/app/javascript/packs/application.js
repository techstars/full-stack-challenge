import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import CompanyForm from '../components/CompanyForm';

document.addEventListener('DOMContentLoaded', () => {
    render(
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/companies" component={App} />
                <Route exact path="/new" component={CompanyForm} />
            </Switch>
        </Router>,
        document.querySelector('#root'),
    );
});