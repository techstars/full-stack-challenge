import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CompanyList from './components/CompanyList';
import CompanyForm from './components/CompanyForm';
import CompanyDetail from './components/CompanyDetail';

const App = () => {
    const [addingCompany, updateAddingCompany] = useState(false);
    const [activeCompany, updateActiveCompany] = useState('');
    const [companies, updateCompanies] = useState([])

    // on mount, retrieve all companies and display
    useEffect(() => {
      updateCompaniesList();
    }, [])

    const updateCompaniesList = () => {
        return axios.get('/companies')
                    .then((companies) => {
                      updateCompanies(companies.data);
                      return companies;
                    })
                    .catch((err) => {
                      throw err;
                    })
    }

    const addCompany = (company) => {
        axios.post('/companies', company)
             .then((response) => {
               updateCompaniesList();
             })
             .catch((err) => {
               console.error(err);
             })
    }

    const addButtonHandler = () => {
        updateAddingCompany(true);
    }

    const setActive = (companyIndex) => {
        // index passed from mapping over companies
        console.log(companyIndex)
        updateActiveCompany(companies[companyIndex])
    }

    const cancelAdd = () => {
      updateAddingCompany(false);
    }

    const goBackHandler = () => {
        updateActiveCompany('');
    }

    return (
        <div id="app">

            {addingCompany ?
                <CompanyForm cancel={cancelAdd} submit={addCompany} />
                :
                activeCompany ?
                <CompanyDetail company={activeCompany} allCompanies={companies} goBack={goBackHandler} updateCompanies={updateCompaniesList} updateActive={updateActiveCompany} />
                :
                <CompanyList buttonHandler={addButtonHandler} companies={companies} setActive={setActive} activeCompany={activeCompany} />
            }

        </div>
    );
}

export default App;