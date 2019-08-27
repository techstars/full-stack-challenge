import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import AddCompanyForm from '../components/AddCompanyForm';

document.addEventListener('DOMContentLoaded', () => {
    render(
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/companies" component={App} />
            </Switch>
        </Router>,
        document.querySelector('#root'),
    );
});