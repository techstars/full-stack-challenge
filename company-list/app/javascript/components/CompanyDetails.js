import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

class CompanyDetails extends React.Component {
    constructor(props){
        super(props)

    }
    
    handleDelete = () => {
        const {deleteCompany} = this.props
        const { id } = this.props.company
        deleteCompany(id)
    }

    render(){
        const {
            name,
            city,
            state,
            id,
            description,
            founded_date,
        } = this.props.company

        return (
            
            <div className="Card">
                <div className="form-actions">
                    <button className="delete"
                        type="button"
                        onClick={this.handleDelete}>Delete Company
                    </button>
                </div>

                <div className="CardTitle">
                    <h2>{name}</h2>
                    <span>{`${city}, ${state}`}</span>

                </div>
                <p>{description}</p>
                <span>
                    {`Founded ${founded_date}`}
                </span>
            </div>
        )
    }    
};


// const CompanyDetails = (props) => {
//     console.log(props)
//     return <h1>Hello {props.match.params.id}!</h1>


// };

export default CompanyDetails;
