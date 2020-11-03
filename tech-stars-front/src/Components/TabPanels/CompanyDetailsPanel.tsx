//React
import React from 'react'

//Helpers
import _ from 'lodash'

//Types
import { Categories, Company, Founders } from '../../types'

interface Props {
  company: Company
}

export const CompanyDetailsPanel: React.FC<Props> = ({ company }) => {
  return (
    <>
      <div className="modal__tab-body-wrapper--top">
        <div className="modal__tab-body--title">{company.name}</div>
        <span className="modal__tab-details-wrapper">
          <span>{company.founded_date}</span>
          <span>
            {company.city}, {company.state}
          </span>
        </span>
      </div>
      <div className="modal__tab-body-wrapper--bottom">
        <div className="modal__tab-tag-wrapper">
          <div className="modal__tab-tag-title">Category Tags</div>
          {_.isBoolean(company.categories) ? (
            _.map(company.categories, (category: Categories) => {
              const name = category.name
              return <div className="modal__tab-tag">{name?.toUpperCase()}</div>
            })
          ) : (
            <div className="modal__tab-tag">NO CATEGORIES</div>
          )}
        </div>
        <div className="modal__tab-body--bottom">
          <div className="modal__tab-body--description">{company.description}</div>
          <div className="modal__tab-founder-wrapper">
            <div className="modal__tab-tag-title">Founders</div>
            {company.founders &&
              _.map(company.founders, (founder: Founders) => {
                return (
                  <div className="modal__tab-founder" key={founder.id}>
                    {founder.first_name} {founder.last_name}
                    <div>Title: {founder.title}</div>
                  </div>
                )
              })}
          </div>
        </div>
      </div>
    </>
  )
}
