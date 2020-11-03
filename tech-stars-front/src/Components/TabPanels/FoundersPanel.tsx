//React
import React from 'react'

//Types
import { Company, Founders } from '../../types'

//Components
import FounderForm from '../FormComponents/FounderForm'

//Helpers
import _ from 'lodash'

interface Props {
  company: Company
  founderFormShowing: any
  toggleFounderForm: () => void
  handleNewFounders: any
}

export const FoundersPanel: React.FC<Props> = ({
  company,
  founderFormShowing,
  toggleFounderForm,
  handleNewFounders,
}) => {
  return (
    <>
      {!founderFormShowing ? (
        <button className="company-button--create founder" onClick={toggleFounderForm}>
          <i className="fas fa-plus"></i>
          ADD FOUNDER
        </button>
      ) : (
        <div className="founder-button-wrapper">
          <button className="company-button--create back" onClick={toggleFounderForm}>
            BACK
          </button>
        </div>
      )}

      {!founderFormShowing && (
        <div className="modal__tab-founder-wrapper-top">
          <div className="modal__tab-tag-title">Founders</div>
          {company.categories &&
            _.map(company.founders, (founder: Founders) => {
              return (
                <div className="modal__tab-founder-card" key={founder.id}>
                  {founder.first_name} {founder.last_name}
                  <div>Title: {founder.title}</div>
                </div>
              )
            })}
        </div>
      )}
      {founderFormShowing && (
        <div className="modal__tab-founder-wrapper-top form">
          <FounderForm companyID={company.id} handleNewFounders={handleNewFounders} />
        </div>
      )}
    </>
  )
}
