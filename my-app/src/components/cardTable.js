import React from 'react'
import styled from 'styled-components'

const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
` 

const Card = (props) => (
    <div style={{ color: '#003366', borderColor: 'blue', border: '5px solid' }}>
      <h2>The Benefits of Green Apples</h2>
      <div>3/2/2019</div>
      <div>
        Green apples have a high fiber content which helps in increasing the
        body's metabolism. While consuming an apple, make sure that you're not
        tossing the peel in the trash. Consuming apple with its peel improves the
        overall health. Due to its high fiber content, apple helps in
        detoxification process. It keeps the liver and digestive system away from
        harmful elements.
      </div>
      <ActionButton>hey</ActionButton>
    </div>
  )
export default Card