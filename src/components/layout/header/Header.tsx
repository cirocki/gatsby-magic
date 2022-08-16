import React from 'react'
import styled from "styled-components";

export default function Header() {

  const StyledHeader = styled.header`
    
    text-align: center;
    border: ${props => `1px solid ${props.theme.colors.onyx}`};
    /* background: red; */
  `
  
  return (
    <StyledHeader>Header111111</StyledHeader>
  )
}
