import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';



const CompanyCard = (props) => {
    const { name, city, state, id, description, founded_date } = props.company
    return (
        <div className="Card">
            <div className="CardTitle">
                <h2>{name}</h2>
                <span>{`${city}, ${state}`}</span>

                <a>...More</a>

            </div>
            <p>{description}</p>
            <span>
                {`Founded ${founded_date}`}
            </span>
        </div>
    )
};


export default CompanyCard;