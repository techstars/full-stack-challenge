import React , { useState, useEffect } from 'react'
import './CompanyDetails.scss'
import EditCompanyModal from '../../components/EditCompanyModal/EditCompanyModal'
import AddFounderModal from '../../components/AddFounderModal/AddFounderModal'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CompanyDetails = (props) => {
  const baseUrl = 'https://ancient-waters-80489.herokuapp.com/'

  const { name, city, state, description, date, id } = (props.location && props.location.details) || {}
  const [companyDetails, setCompanyDetails] = useState({ id: id, name: name, city: city, state: state, description: description, founded_date: date })
  const [founders, setFounders] = useState([])
  const [editCompany, setEditCompany] = useState(false)
  const [editFounder, setEditFounder] = useState(false)
  const [newFounderInfo, setNewFounderInfo] = useState({ full_name: null, title: null, company_id: id })

  const getFounderList = () => {
    if (id) {
      fetch(baseUrl + 'founders/' + id, {
        method: 'get'
      })
        .then(res => res.json())
        .then(response => {
          setFounders(response)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const deleteCompany = () => {
    if (id) {
      fetch(`${baseUrl}company/${id}`, {
        method: 'delete'
      })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const updateDetails = (e, key) => {
    const updateCompanyDetails = companyDetails
    updateCompanyDetails[key] = e.target.value
    setCompanyDetails(updateCompanyDetails)
  }

  const saveDetails = () => {
    fetch(`${baseUrl}company/${id}`, {
      method: 'put',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        companyDetails
      )
    })
      .then(response =>
        response.json()
      )
      .then(response =>
        setCompanyDetails(companyDetails)
      )
      .catch((err) => {
        console.log(err)
      })
    setEditCompany(false)
  }

  useEffect(() => {
    getFounderList()
  }, [])

  return (
    <div className='details-container'>
      <h3 className='d-flex justify-content-center p-4'>{companyDetails.name}</h3>
      <div className='d-flex justify-content-center p-4 align-items-center'>
        <div className='d-inline-flex align-items-center justify-content-center'>
          <p className='m-2'>{companyDetails.founded_date} </p>
          <p className='m-2'> {companyDetails.city}, {companyDetails.state}</p>
        </div>
        <div className='line-break m-2' />
        <div className='d-inline-flex align-items-center justify-content-center'>
          <Button className='m-2' onClick={() => setEditCompany(true)}>Edit</Button>
          <Link
            onClick={(e) => deleteCompany(e)}
            className='btn btn-primary m-2'
            to={{
              pathname: '/'
            }}
          >
            Delete
          </Link>
        </div>
      </div>
      <p className='d-flex justify-content-center p-4'>{companyDetails.description}</p>
      <h5 className='m-4'>Founders</h5>
      <div className='founders-list d-flex justify-content-between m-4'>
        <div>
          {
            founders.length > 0
              ? founders.map((founder, key) => {
                  return (
                    <div key={key} className='d-inline-flex align-items-center m-4'>
                      <div>{founder.full_name}: {founder.title}</div>
                    </div>
                  )
                })
              :
              <p className='m-4'>No Founders Have Been Added Yet</p>
            }
        </div>
        <div className='m-3'>
          <Button onClick={() => setEditFounder(true)}>Add Founder</Button>
        </div>
      </div>
      <EditCompanyModal companyDetails={companyDetails} updateDetails={updateDetails} editCompany={editCompany} setEditCompany={setEditCompany} saveDetails={saveDetails} />
      <AddFounderModal
        setNewFounderInfo={setNewFounderInfo} newFounderInfo={newFounderInfo} editFounder={editFounder} setEditFounder={setEditFounder}
        setFounders={setFounders} founders={founders} baseUrl={baseUrl} 
      />
    </div>
  )
}

export default CompanyDetails
