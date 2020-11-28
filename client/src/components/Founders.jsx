import React from 'react';

const Founders = ({ founders }) => {
  return (
    <div>
      {founders.map((founder) => {
        return (
          <div>
            <p>{founder.name}</p>
            <p>{founder.title}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Founders;