import React from 'react'
import styled from "styled-components";
import DarkModeToggler from '../../features/DarkModeToggler';

function Footer(props) {
  console.log(props);
  const StyledFooter = styled.footer`
    
    text-align: center;
    border: ${props => `1px solid ${props.theme.colors.persianGreen}`};
  `
  return (
    <StyledFooter>
      Footer
      <DarkModeToggler/>
      </StyledFooter>
  )
}

export default Footer