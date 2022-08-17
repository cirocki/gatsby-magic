import React from 'react'
import styled from "styled-components";

function Footer(props) {
  console.log(props);
  const StyledFooter = styled.footer`
    
    text-align: center;
    border: ${props => `1px solid ${props.theme.colors.persianGreen}`};
  `
  return (
    <StyledFooter>Footer</StyledFooter>
  )
}

export default Footer