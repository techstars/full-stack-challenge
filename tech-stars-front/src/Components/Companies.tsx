//React
import React from 'react'
import { useHistory } from 'react-router-dom'

//Components
import { ModalComponent } from '../Components/Modal'
import SkeletonTable from './Skeleton-Table'
import Table from './Table'
import { ToastContainer } from 'react-toastify'

//Modules
import { triggerToast } from '../Modules/toast.module'

//Helpers
import axios from 'axios'
import { Endpoints } from '../Modules/endpoints.module'
import _ from 'lodash'

//Types
import { CompaniesPayload, Company, CompanyPayload } from '../types'

const Companies: React.FC = (): JSX.Element => {
  const [data, setData] = React.useState<Company[] | null>()
  const history = useHistory()
  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false)
  const [company, setCompany] = React.useState<Company | null>()

  const closeModal = () => {
    setIsOpen(false)
  }

  const handleShowModal = (e: any) => {
    setIsOpen(true)
    setCompany(
      _.find(data, (company: Company) => {
        return company.id === parseInt(e.target.innerHTML)
      })
    )
  }

  React.useEffect(() => {
    const fetch = async () => {
      try {
        const fetchedData: CompaniesPayload = await axios.get(
          'https://tech-stars.herokuapp.com/companies'
        )
        const receivedData: Company[] = fetchedData.data
        setData(receivedData)
      } catch (error) {
        setData(null)
        triggerToast({
          description: 'Failed to load data',
        })
      }
    }
    fetch()
  }, [])

  const handleCreateNewCompany = () => {
    history.push(Endpoints.CreateCompany)
  }

  const handleDeletedData = (id: number) => {
    const filteredData: Company[] | any = _.filter(data, (company: Company) => {
      return company.id !== id && company
    })
    setData(filteredData)
  }

  const handleNewFounders = async (companyID: number) => {
    try {
      const fetchedData: CompanyPayload = await axios.get(
        `https://tech-stars.herokuapp.com/companies/${companyID}`
      )
      setCompany(fetchedData.data)
    } catch (error) {
      setData(null)
      triggerToast({
        description: 'Failed to load data',
      })
    }
  }

  return (
    <>
      <ToastContainer />
      {modalIsOpen && company && (
        <ModalComponent
          closeModal={closeModal}
          openModal={handleShowModal}
          company={company}
          handleDeletedData={handleDeletedData}
          handleNewFounders={handleNewFounders}
        />
      )}
      {data ? (
        <div className="page__wrapper">
          <div className="page__header-wrapper">
            <div className="company__search-wrapper">
              <i className="fas fa-search"></i>
              <input className="company__search-bar"></input>
            </div>
            <button className="company-button--create" onClick={handleCreateNewCompany}>
              <i className="fas fa-plus"></i>
              NEW COMPANY
            </button>
          </div>
          <Table data={data} handleShowModal={handleShowModal} />
        </div>
      ) : (
        <SkeletonTable />
      )}
    </>
  )
}

export default Companies
