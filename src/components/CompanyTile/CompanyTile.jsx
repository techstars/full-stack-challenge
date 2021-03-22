import React from 'react'
import './CompanyTile.scss'
import { Link } from 'react-router-dom'

const CompanyTile = (props) => {
  const details =
    {
      id: props.company.id,
      name: props.company.name,
      city: props.company.city,
      state: props.company.state,
      description: props.company.description,
      date: props.company.founded_date
    }

  return (
    <div className='card'>
      <div className='card-header d-inline-flex align-items-center justify-content-between'>
        <div className='d-inline-flex align-items-center'>
          <h4>{props.company.name} | </h4>
          <h5>{props.company.city}, {props.company.state}</h5>
        </div>
        <Link
          className='btn btn-primary'
          to={{
            pathname: '/Details',
            details
          }}
        >
          More
        </Link>
      </div>
      <div class='card-body'>
        <p class='card-text'>{props.company.description}</p>
      </div>
    </div>
  )
}

export default CompanyTile
