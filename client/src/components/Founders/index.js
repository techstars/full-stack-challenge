import React from 'react';
import './index.css';

const Founders = ({founders, onClick}) => {

  return (
    <div className="founders-container">
      {founders && founders.map((founder) => {
        return (<div className="founder" key={founder.id}>{founder.name} : {founder.title}</div>);
      })}
      <div className="f-button" onClick={onClick}>Add Founder</div>
    </div>
  )
}

export default Founders;