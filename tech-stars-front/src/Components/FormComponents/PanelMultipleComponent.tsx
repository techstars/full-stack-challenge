//React
import React from 'react'

//Formik
import { ErrorMessage, Field } from 'formik'

//Helpers
import _ from 'lodash'

interface PanelMultipleProps {
  names: string[]
  label: string
}

const PanelMultipleComponent: React.FC<PanelMultipleProps> = ({ names, label }): JSX.Element => {
  const determinePlaceholder = (name: string) => {
    switch (name) {
      case 'state':
        return 'CO'
      case 'city':
        return 'Boulder'
      case 'first_name':
        return 'Steve'
      case 'last_name':
        return 'Jobs'
      default:
        break
    }
  }

  return (
    <div className="panel-component">
      <div className="panel-component__header">
        <div className="panel-component__title">{label}</div>
        <div className="panel-component__secondary-title">
          <i className="fas fa-asterisk"></i>
          <div className="panel-component__required-title"> = Required Field</div>
        </div>
      </div>
      <div className="panel-component__body multiple">
        {_.map(names, (name) => {
          return (
            <div className="panel-content__row" key={name}>
              <div className="panel-content__row-title">{name.toUpperCase()}:</div>
              <Field
                id="shortDescription"
                name={name}
                className="form-select"
                placeholder={determinePlaceholder(name)}
              />
              <ErrorMessage name={name} component="div" className="form__error_div" />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default PanelMultipleComponent
