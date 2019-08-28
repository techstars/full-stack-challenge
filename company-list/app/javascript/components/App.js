import React from 'react';
import CompaniesContainer from './CompaniesContainer';
import Header from './Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CompanyForm from './CompanyForm';


import './App.css';


const App = () => (
    <div >
        <Header />
            <CompaniesContainer />
    </div>
);

export default App;

