import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import CompaniesList from './CompaniesList';
import AddCompanyForm from './AddCompanyForm';
import { Link } from 'react-router-dom';


class CompaniesContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            companies: null,
            founders: null,
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
                })
                    .catch((error) => {
                        console.log(error);
                    });


            });

    }


    render() {
        const { companies } = this.state;
        if (companies === null) return null;

        return (
            <div>
                <div className="grid">
                    <CompaniesList companies={companies} />
                </div>
                <div>
                    <Link to="/new">Add New Company</Link>
                </div>
            </div>
        );
    }
}


export default CompaniesContainer;