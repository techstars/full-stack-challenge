import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

import { Company } from '../types/types'

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
  right: 3rem;
`

interface CompanyCardProps {
  company: Company
}

function CompanyCard({ company }: CompanyCardProps) {
  return (
    <CardContainer>
      <div
        data-selector="company-name"
        className="company-name text-gray-700 font-bold text-xl mb-2 bg-blue-300 text-right pr-5"
      >
        {company.name}
      </div>
      <Logo src={company.logoUrl} alt="company-logo" />
      <p className="text-gray-700 text-right text-base pr-5">
        {company.city}, {company.state}
      </p>
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
    </CardContainer>
  )
}

export default CompanyCard
