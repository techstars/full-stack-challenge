import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CompanyCard from './CompanyCard'


export default class CompaniesList extends Component {
    renderCompanies() {
        const { companies } = this.props;
        companies.sort(
            (a, b) => new Date(b.founded_date) - new Date(a.founded_date),
        );

        return companies.map(company => (
            <div key={company.id}>
                <CompanyCard company={company}/>
            </div>
        ));
    }

    render() {
        return (
            <div className="CompaniesList">
                {this.renderCompanies()}
            </div>
        );
    }
}

CompaniesList.propTypes = {
    companies: PropTypes.arrayOf(PropTypes.object),
    founders: PropTypes.arrayOf(PropTypes.object),

};

CompaniesList.defaultProps = {
    companies: [],
    founders:[]

};

