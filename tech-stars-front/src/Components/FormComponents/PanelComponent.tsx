//React
import React from 'react'

//Formik
import { ErrorMessage, Field } from 'formik'

//Helpers
import classNames from 'classnames'

interface PanelProps {
  name: string
  label: string
  placeholder?: string | null
  className?: string | null
}

const PanelComponent: React.FC<PanelProps> = ({
  name,
  label,
  placeholder,
  className,
}): JSX.Element => {
  const deteremineComponentType = () => {
    switch (name) {
      case 'description':
        return 'textarea'
      case 'short_description':
        return 'textarea'
      default:
        return 'input'
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
      <div className="panel-component__body">
        <div className="panel-content__row">
          <Field
            name={name}
            placeholder={placeholder}
            className={classNames('form-select', { change: className })}
            type={name === 'founded_date' ? 'date' : null}
            component={deteremineComponentType()}
            key={name}
          />
          <ErrorMessage name={name} component="div" className="form__error_div" />
        </div>
      </div>
    </div>
  )
}

export default PanelComponent
