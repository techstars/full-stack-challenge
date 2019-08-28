import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';

const CompanyDetails = (props) => {
    const {
        name,
        city,
        state,
        id,
        description,
        founded_date
    } = props.location.state.company
    return (
        <div className="Card">
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
};


// const CompanyDetails = (props) => {
//     console.log(props)
//     return <h1>Hello {props.match.params.id}!</h1>


// };

export default CompanyDetails;
