import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { map } from 'lodash'
import moment from 'moment'
import axios from 'axios'

import { Company, Founder } from '../types/types'
import { useApiRequest } from '../hooks/api.hooks'
import { setSelectedDetailItem, setSuccess } from '../state/actions'
import { useAppContext } from '../hooks/app.hooks'
import ROUTES from '../router/routes'
import AddEditFounder from './AddFounder'
import AddCompany, { buttonStyles } from './AddCompany'

const CardContainer = styled.div.attrs({
  className:
    'card relative shadow-md px-8 border border-teal-400 bg-white rounded-b rounded-r p-4 flex flex-col justify-between leading-normal transition duration-500 ease-in-out bg-gray-100 hover:bg-purple-100 transform hover:scale-103',
})``
const Logo = styled.img`
  border-radius: 5%;
  width: 96px;
  height: 96px;
  position: absolute;
  bottom: 1rem;
  right: 2rem;
`

function CompanyDetail() {
  const {
    state: { companies, selectedDetailItem: company },
    dispatch,
  } = useAppContext()
  const params: { id?: string } = useParams()
  const [edit, setEdit] = useState(false)
  const [addFounder, setAddFounder] = useState(false)
  const getCompany = useApiRequest({ endpoint: `/companies/${params.id!}`, successAction: setSelectedDetailItem })
  const deleteCompany = useApiRequest({
    method: 'DELETE',
    endpoint: `/companies/${params.id!}`,
    successAction: setSuccess,
    successRedirect: ROUTES.companies,
  })
  const btnClass =
    'text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow block'

  useEffect(() => {
    const companyFromState = companies.find((c: Company) => c.id.toString() === params.id)
    if (companyFromState) {
      dispatch(setSelectedDetailItem(companyFromState))
    } else {
      getCompany()
    }
  }, []) //eslint-disable-line

  if (!company || !company.name) {
    return null
  }

  const shouldFormOpen = (isOpen: boolean) => () => {
    setEdit(isOpen)
  }

  const deleteFounder = (id: string) => async () => {
    const apiBaseUrl = process.env.REACT_APP_API_URL || 'http://localhost:4000'

    await axios.delete(`${apiBaseUrl}/founders/${id}`)
    getCompany()
  }

  const handleDelete = () => {
    const confirm: boolean = window.confirm('are you sure you want to delete his company?')
    if (confirm) {
      deleteCompany()
    }
  }

  return (
    <>
      <div className="flex justify-start">
        <Link className={`${buttonStyles} mb-4`} to={ROUTES.companies}>
          Back
        </Link>
      </div>
      <CardContainer>
        <div
          data-selector="company-name"
          className="company-name text-gray-700 font-bold text-2xl mb-2 bg-blue-300 text-right pr-5"
        >
          {company.name}
        </div>
        <Logo src={company.logoUrl} alt="company-logo" />
        <p className="text-gray-700 text-right text-base pr-5">
          {company.city}, {company.state}
        </p>
        <div className="flex items-center justify-around  w-3/12 mx-auto">
          <button id="edit-btn" onClick={shouldFormOpen(true)} className={btnClass}>
            Edit
          </button>
          <button id="delete-btn" onClick={handleDelete} className={btnClass}>
            Delete
          </button>
        </div>
        <div className="mb-8">
          <p className="text-gray-700 font-semibold text-base">Our mission:</p>
          <p className="text-gray-700 w-9/12 text-base">{company.description}</p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-600">Founded: {moment(company.dateFounded).format('MMMM DD, YYYY')}</p>
          </div>
          <div></div>
        </div>
        {company.founders && company.founders.length > 0 && (
          <div className="border rounded border-gray-600 mt-5 p-3">
            <h3 className="text-lg mb-2">Founders</h3>
            <ul id="founder-list">
              {map(company.founders, (founder: Founder) => (
                <li className="text-sm" id={founder.id}>
                  <span className="font-semibold">
                    {founder.firstName} {founder.lastName}
                  </span>{' '}
                  | {founder.title}{' '}
                  <span
                    className="delete-founder cursor-pointer text-red-700 text-sm"
                    onClick={deleteFounder(founder.id)}
                  >
                    x
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {!addFounder && (
          <div className="flex">
            <button id="add-founder" onClick={() => setAddFounder(true)} className={`${btnClass} w-2/12 mt-4`}>
              Add Founder
            </button>
          </div>
        )}
        {addFounder && (
          <div id="add-edit-founder-form" className="mt-5">
            <AddEditFounder companyId={company.id} closeAction={() => setAddFounder(false)} />
          </div>
        )}
      </CardContainer>

      {edit && (
        <div id="edit-form" className="mt-5">
          <AddCompany editing company={company} closeAction={shouldFormOpen(false)} />
        </div>
      )}
    </>
  )
}

export default CompanyDetail
