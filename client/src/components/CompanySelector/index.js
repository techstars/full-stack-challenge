import React from 'react';
import { useHistory } from 'react-router-dom';

const CompanySelector = ({children}) => {
  const history = useHistory();
  const redirect = (id) => {
    history.push(`/company/${id}`);
  };

  return (
    React.Children.map(children, (child) => {
      if(React.isValidElement(child)) {
        return React.cloneElement(child, {
          onClick: () => redirect(child.props.id)
        })
      }
    })
  )
};

export default CompanySelector;