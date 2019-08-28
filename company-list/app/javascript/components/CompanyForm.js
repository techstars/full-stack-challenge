import React from 'react';
import PropTypes from 'prop-types';


class CompanyForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            company: props.company,
            errors: {}
         };
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { company } = this.state
        const errors = this.validateCompany(company);
        if (!this.isEmptyObject(errors)) {
            this.setState({ errors })
        } else {
            console.log(company);
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;

        this.setState(prevState => ({
            company: {
                ...prevState.company,
                [name]: value,
            },
        }));
    };




    validateCompany= (company) => {
        const errors = {};

        if (company.name === '') {
            errors.name = 'You must enter a Company Name';
        }

        if (company.city === '') {
            errors.city = 'You must enter a valid city';
        }

        if (company.state === '') {
            errors.state = 'You must enter a state';
        }

        if (company.founded_date === '') {
            errors.founded_date = 'You must enter a valid date';
        }

        if (company.description === '') {
            errors.description = 'You must enter a valid date';
        }
        console.log(company)
        console.log(errors)

        return errors;
    }

    isEmptyObject = (obj) => {
        return Object.keys(obj).length === 0;
    }

    renderErrors = () => {
        const { errors } = this.state;

        if (this.isEmptyObject(errors)) {
            return null;
        }

        return (
            <div className="errors">
                <h3>The following errors prohibited this company from being saved:</h3>
                <ul>
                    {Object.values(errors).map(error => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            </div>
        );
    }


    render() {
        return (
            <div>
                <h2>New Event</h2>
                <form className="CompanyForm" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">
                            <strong>CompanyName: </strong>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                onChange={this.handleInputChange}    
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="city">
                            <strong>city:</strong>
                            <input 
                                type="text" 
                                id="city" 
                                name="city" 
                                onChange={this.handleInputChange}   
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="state">
                            <strong>State: </strong>
                            <input 
                                type="text" 
                                id="state" 
                                name="state" 
                                onChange={this.handleInputChange}   
                            />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="founded_date">
                            <strong>Founded Date:</strong>
                            <input
                                type="text" 
                                id="founded_date" 
                                name="founded_date" 
                                onChange={this.handleInputChange}   
                            />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="description">
                            <strong>Description:</strong>
                            <input
                                type="text"
                                id="description"
                                name="description"
                                onChange={this.handleInputChange}
                            />
                        </label>
                    </div>
                    <div className="form-actions">
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
        );
    }
}

CompanyForm.defaultProps = {
    company: {
        name: '',
        city: '',
        state: '',
        founded_date: '',
        description: ''
    }
};



export default CompanyForm;