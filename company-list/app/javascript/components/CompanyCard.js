import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

class CompanyCard extends React.Component {
    constructor(props){
        super(props)

    }

    handleMore = () => {
       const {showDetails, company} = this.props
       showDetails(company)

    }
    
    render(){
        const { 
            name,
            city,
            state,
            id,
            description,
            founded_date
        } = this.props.company


        return (
            <div className="Card">
                <div className="CardTitle">
                    <h2>{name}</h2>
                    <span>{`${city}, ${state}`}</span>

                    <a onClick={this.handleMore}>...More</a>

                </div>
                <p>{description}</p>
                <span>
                    {`Founded ${founded_date}`}
                </span>
            </div>
        )
     }        
};


export default CompanyCard;