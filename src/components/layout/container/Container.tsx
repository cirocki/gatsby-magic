import React from "react";
import styled from "styled-components";

export default function Container({children}) {

  const StyledContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    border: 1px solid red;
    padding: 0 2rem;
    background: ${props => props.theme.colors.lightBlue};
    @media (max-width: ${props => props.theme.maxWidth.l}) {
    background: red;
  }
  `;
  return  (
  <StyledContainer>{children}</StyledContainer>
  )
}


