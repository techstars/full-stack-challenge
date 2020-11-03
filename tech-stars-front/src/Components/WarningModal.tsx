//React
import * as React from 'react'

//Styles
import '../Styles/Modal.scss'

//Helpers
import axios from 'axios'

interface Props {
  companyID: number
  closeWarningModal: () => void
  closeModal: () => void
  handleDeletedData: (id: number) => void
}

export const WarningModal: React.FC<Props> = ({
  companyID,
  closeWarningModal,
  closeModal,
  handleDeletedData,
}) => {
  const handleDelete = async () => {
    const headers = {
      Authorization: 'Bearer paperboy',
    }

    await axios.delete(`https://tech-stars.herokuapp.com/companies/${companyID}`, { headers })
    closeWarningModal()
    closeModal()
    handleDeletedData(companyID)
  }

  return (
    <>
      <div className="warning__modal-wrapper">
        <i className="fas fa-times" onClick={closeWarningModal}></i>
        <div className="warning__modal-wrapper-title">Unsaved Changes</div>
        <i className="fas fa-exclamation-triangle"></i>
        <div className="warning__modal-wrapper-warning">
          You are about to delete this company. If you exit now, nothing will be deleted. Are you
          sure you want to delete this company?
        </div>
        <div className="warning__modal-btn-wrapper">
          <button className="company-button--update" onClick={closeWarningModal}>
            EXIT
          </button>
          <button className="company-button--delete final" onClick={handleDelete}>
            DELETE
          </button>
        </div>
      </div>
      <div className="backdrop warning" />
    </>
  )
}
