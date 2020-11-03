//React
import React from 'react'

interface IDLink {
  value: number
  handleShowModal: () => void
}

export const MakeIDLink: React.FunctionComponent<IDLink> = (
  { value },
  handleShowModal
): JSX.Element => {
  return (
    <div className="id-link" onClick={handleShowModal}>
      {value}
    </div>
  )
}
