//React
import * as React from 'react'
import { useHistory } from 'react-router-dom'

//Components
import { WarningModal } from './WarningModal'

//Styles
import '../Styles/Modal.scss'
import '../Styles/Tabs.scss'
import '../Styles/Form.scss'
import '../Styles/FoundersDetails.scss'

//Helpers
import classNames from 'classnames'

//Modules
import { Endpoints } from '../Modules/endpoints.module'

//Types
import { Company } from '../types'
import { TabComponent } from './TabPanels/Tabs'

interface Props {
  closeModal: () => void
  openModal: (e: any) => void
  company: Company
  handleDeletedData: (id: number) => void
  handleNewFounders: any
}

export const ModalComponent: React.FC<Props> = ({
  closeModal,
  openModal,
  company,
  handleDeletedData,
  handleNewFounders,
}) => {
  const history = useHistory()
  const [warningModalIsOpen, setWarningModalIsOpen] = React.useState<boolean>(false)
  const [founderFormShowing, setFounderFormShowing] = React.useState<boolean>(false)

  const handleDelete = () => {
    setWarningModalIsOpen(true)
  }

  const closeWarningModal = () => {
    setWarningModalIsOpen(false)
  }

  const toggleFounderForm = () => {
    setFounderFormShowing(!founderFormShowing)
  }

  return (
    <>
      {warningModalIsOpen && (
        <WarningModal
          closeWarningModal={closeWarningModal}
          companyID={company.id}
          closeModal={closeModal}
          handleDeletedData={handleDeletedData}
        />
      )}
      <div className={classNames({ 'side-drawer open': openModal })}>
        <header className="modal__header-wrapper">
          <div className="modal__header-wrapper-left">
            <i className="fas fa-arrow-circle-left" onClick={closeModal}></i>
            <h1>{company?.name?.toUpperCase()}</h1>
          </div>
          <div className="modal__header-btn-wrapper">
            <button
              className="company-button--update"
              onClick={() =>
                history.push({
                  pathname: Endpoints.EditCompany,
                  state: { company },
                })
              }
            >
              <i className="fas fa-edit"></i>
              EDIT COMPANY
            </button>
            <button className="company-button--delete" onClick={handleDelete}>
              <i className="far fa-trash-alt"></i>
              DELETE COMPANY
            </button>
          </div>
        </header>
        <TabComponent
          company={company}
          handleNewFounders={handleNewFounders}
          toggleFounderForm={toggleFounderForm}
          founderFormShowing={founderFormShowing}
        />
      </div>
      <div className="backdrop" />
    </>
  )
}
