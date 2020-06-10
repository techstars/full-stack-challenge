import React, { useEffect } from 'react'

import { map } from 'lodash'
import { Company } from '../types/types'
import CompanyCard from './CompanyCard'
import { useApiRequest } from '../hooks/api.hooks'
import { useAppContext } from '../hooks/app.hooks'
import { setCompanies } from '../state/actions'
import { useHistory, Link } from 'react-router-dom'
import ROUTES from '../router/routes'

interface CompanyListProps {
  companies: Company[]
}

function CompanyList() {
  const {
    state: { companies },
  } = useAppContext()
  const history = useHistory()
  const getCompanies = useApiRequest({ endpoint: '/companies', successAction: setCompanies })

  const viewCompanyDetails = (id: string) => () => {
    history.push(ROUTES.company.replace(':id', id))
  }

  useEffect(() => {
    getCompanies()
  }, [getCompanies])

  return (
    <div>
      <div className="flex w-full justify-end">
        <Link
          id="add-company"
          className="text-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow block mb-10"
          to={ROUTES.addCompany}
        >
          Add Company
        </Link>
      </div>
      <div id="company-list">
        {map(companies, (c: Company) => (
          <div id={c.id.toString()} className="mb-3 cursor-pointer" onClick={viewCompanyDetails(c.id.toString())}>
            <CompanyCard company={c} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CompanyList
