import React from 'react'
import styled from 'styled-components'
import { Box, Grid } from 'theme-ui';
import { flexbox, grid, box } from 'styled-system';

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
    <div style={{ flexContainer: "", color: '#003366', borderColor: 'blue', border: '5px solid' }}>
      <Grid gridGap={[128, null, 192]}>
        <div>hey</div>
        <div>hello</div>
      </Grid>
      {/* <h2>The Benefits of Green Apples</h2>
      <div>3/2/2019</div>
      <div>
        Green apples have a high fiber content which helps in increasing the
        body's metabolism. 
      </div>
      <ActionButton>hey</ActionButton> */}
    </div>
  )
export default Card