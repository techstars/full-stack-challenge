import React, { useState } from 'react';
import CompanyList from './components/CompanyList';
import CompanyForm from './components/CompanyForm';
import CompanyDetail from './components/CompanyDetail';

const testData = [
    {
        name: 'Test Company 1',
        city: 'Denver',
        state: 'CO',
        founded: '2020-04-12',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Test Company 2',
        city: 'Springfield',
        state: 'MO',
        founded: '2020-05-11',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Test Company 3',
        city: 'Kalispell',
        state: 'MT',
        founded: '2019-11-19',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
]

const App = () => {
    const [addingCompany, updateAddingCompany] = useState(false);
    const [activeCompany, updateActiveCompany] = useState('');
    const [companies, updateCompanies] = useState(testData)

    const addButtonHandler = () => {
        updateAddingCompany(true);
    }

    return (
        <div id="app">

            {addingCompany ?
                <CompanyForm />
                :
                activeCompany ?
                <CompanyDetail />
                :
                <CompanyList buttonHandler={addButtonHandler} companies={companies} />
            }
    <CompanyDetail company={companies[0]}/>
        </div>
    );
}

export default App;