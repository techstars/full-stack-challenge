import React, { Component } from 'react';
import axios from 'axios';
import CompaniesList from './CompaniesList';
import PropTypes from 'prop-types';
import CompanyForm from './CompanyForm';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import CompanyDetails from './CompanyDetails';

const initialState = 
    {
    companies: null,
    founders: null,
    show: 'wait',
    company: { }
}

class CompaniesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = initialState
    }

    componentDidMount() {
        const promise1 = axios.get('/api/companies.json')
        const promise2 = axios.get('/api/founders.json')

        Promise.all([promise1, promise2])
            .then((results) => {
                this.setState({
                    companies: results[0].data,
                    founders: results[1].data,
                    show: 'list'
                })
            .catch((error) => {
                console.log(error);
            });

            });
    }

    showDetails = (company) => {
        this.setState({
            company: company,
            show:'details'
        })
    }

    addCompany = (newCompany) => {
        axios
            .post('/api/companies.json', newCompany)
            .then((response) => {
                alert('A New Company Has Been Added!');
                const savedCompany = response.data;
                this.setState(prevState => ({
                    companies: [...prevState.companies, savedCompany],
                    show: 'list'
                }));

            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleAddButton = () => {
        this.setState({show: 'form'})
    }



    deleteCompany = (companyId) => {
            axios
                .delete(`/api/companies/${companyId}.json`)
                .then((response) => {
                    if (response.status === 204) {
                        alert('Company deleted');
                        const { companies } = this.state;
                        this.setState({ 
                            companies: companies.filter(company => company.id !== companyId),
                            show: 'list' 
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        
    }


    render() {
        const { companies, founders, show, company } = this.state;
        // if (companies === null) return null

        let page
        
        switch(show) {
            case 'wait':
                page = {}
            case 'details':
                page = <CompanyDetails
                    deleteCompany={this.deleteCompany}
                    company={company}
                />
                break;
            case 'form':    
                page = <CompanyForm
                    addCompany={this.addCompany}
                />
                break;
            default:   
                page = <CompaniesList
                    companies={companies}
                    founders={founders}
                    showDetails={this.showDetails}
                /> 
                break;
        }      
        
    
   

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





        // form ? 
        //     page = <CompanyForm
        //             addCompany={this.addCompany}
        //     />
        // :
        //     page = <CompaniesList
        //         companies={companies}
        //         founders={founders}
        //         deleteCompany={this.deleteCompany}
        //         handleMore={this.handleMore}       
        //     />
