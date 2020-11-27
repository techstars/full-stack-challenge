import React, { useState } from 'react';
import CompanyList from './components/CompanyList';
import AddCompany from './components/AddCompany';

const testData = [
    {
        name: 'Test Company 1',
        city: 'Denver',
        state: 'CO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Test Company 2',
        city: 'Springfield',
        state: 'MO',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Test Company 3',
        city: 'Kalispell',
        state: 'MT',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
]

const App = () => {
    const [addingCompany, updateAddingCompany] = useState(true);

    const addButtonHandler = () => {
        updateAddingCompany(true);
    }

    return (
        <div id="app">

            {addingCompany ?
                <AddCompany />
                :
                <CompanyList buttonHandler={addButtonHandler} companies={testData} />
            }

        </div>
    );
}

export default App;