import React, { Component } from 'react';
import axios from 'axios';
import CompaniesList from './CompaniesList';
import PropTypes from 'prop-types';
import CompanyForm from './CompanyForm';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';



class CompaniesContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companies: null,
            founders: null,
            form: false
        };
    }

    componentDidMount() {
        const promise1 = axios.get('/api/companies.json')
        const promise2 = axios.get('/api/founders.json')

        Promise.all([promise1, promise2])
            .then((results) => {
                this.setState({
                    companies: results[0].data,
                    founders: results[1].data
                }).catch((error) => {
                    console.log(error);
                    });
            });
    }

    addCompany = (newCompany) => {
        axios
            .post('/api/companies.json', newCompany)
            .then((response) => {
                alert('A New Company Has Been Added!');
                const savedCompany = response.data;
                this.setState(prevState => ({
                    form: false,
                    companies: [...prevState.companies, savedCompany],
                }));

            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleAddButton = () => {
        const {form } = this.state
        this.setState({form: !form})
    }

    render() {
        const { companies, founders, form } = this.state;
        let page

        if (companies === null) return null

        form ? 
            page = <CompanyForm
                    addCompany={this.addCompany}       
            />
        :
            page = <CompaniesList
                companies={companies}
                founders={founders}
            />


        return (
            <div>
                <button onClick={this.handleAddButton}><Link to="/new"></Link>Add New Company</button>
                <div className="grid">
                    {page}
                </div>
                    
            </div>
        );
    }
}



export default CompaniesContainer;