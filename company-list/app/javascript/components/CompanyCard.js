import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';

const CompanyCard = (props) => {
    const { name, city, state, id, description, founded_date } = props.company
    return (
        <div className="Card">
            <div className="CardTitle">
                <h2>{name}</h2>
                <span>{`${city}, ${state}`}</span>

                <Link to={{
                    pathname: `/${id}`,
                    state: {
                        company: props.company
                    }
                }}>...More</Link>

            </div>
            <p>{description}</p>
            <span>
                {`Founded ${founded_date}`}
            </span>
        </div>
    )
};


export default CompanyCard;