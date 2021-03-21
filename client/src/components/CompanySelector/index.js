import React from 'react';
import { useHistory } from 'react-router-dom';
import './index.css';

const CompanySelector = ({children}) => {
  const history = useHistory();

  const redirect = (id) => {
    history.push(`/company/${id}`);
  };

  return (
    <div className="company-selector-container">
      {React.Children.map(children, (child) => {
        if(React.isValidElement(child)) {
          return React.cloneElement(child, {
            onClick: () => redirect(child.props.id)
          })
        }
      })}
    </div>
  )
};

export default CompanySelector;