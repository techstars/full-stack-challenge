//React
import React from 'react'

//Helpers
import _ from 'lodash'

//Types
import { Categories, Company } from '../../types'

interface Props {
  company: Company
}

export const CategoriesPanel: React.FC<Props> = ({ company }) => {
  return (
    <div className="modal__tab-category-body-wrapper">
      <div className="modal__tab-tag-title">Category Tags</div>
      {_.isBoolean(company.categories) ? (
        _.map(company.categories, (category: Categories) => {
          const name = category.name
          return <div className="modal__tab-tag tab">{name?.toUpperCase()}</div>
        })
      ) : (
        <div className="modal__tab-tag tab">NO CATEGORIES</div>
      )}
    </div>
  )
}
