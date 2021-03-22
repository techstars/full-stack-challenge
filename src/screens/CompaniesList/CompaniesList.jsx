import React, { useState, useEffect } from 'react'
import './CompaniesList.scss'
import CompanyTile from '../../components/CompanyTile/CompanyTile'
import CreateNewCompany from '../CreateNewCompany/CreateNewCompany'
import { Button, Modal } from 'react-bootstrap'

const CompaniesList = () => {
  const baseUrl = 'https://ancient-waters-80489.herokuapp.com/'
  const [companies, setCompanies] = useState([])
  const [addCompanyModalOpen, setAddCompanyModalOpen] = useState(false)

  const getCompanyList = () => {
    fetch(baseUrl + 'companies', {
      method: 'get'
    })
      .then(res => res.json())
      .then(response => {
        setCompanies(response)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getCompanyList()
  }, [])

  return (
    <div className='companylist-container'>
      {
        companies.map((item, key) => {
          return (
            <div key={key} className='p-2'>
              <CompanyTile company={item} />
            </div>
          )
        })
           }
      <Button variant='primary' className='btn m-2' data-toggle='modal' data-target='.bd-example-modal-lg' onClick={() => setAddCompanyModalOpen(true)}>Add Company</Button>
      <Modal
        size='lg'
        centered
        aria-labelledby='contained-modal-title-vcenter'
        show={addCompanyModalOpen}
        onHide={() => setAddCompanyModalOpen(false)}
        backdrop='static'
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Create A New Company</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateNewCompany baseUrl={baseUrl} setCompanies={setCompanies} companies={companies} setAddCompanyModalOpen={setAddCompanyModalOpen} />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default CompaniesList
