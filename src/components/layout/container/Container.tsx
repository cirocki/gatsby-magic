import React from "react";
import styled from "styled-components";

export default function Container({ children }) {
  const StyledContainer = styled.div`
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 2rem;
    @media (${(props) => props.theme.device.msm}) {
      padding: 0 1rem;
    }
  `;

  return <StyledContainer>{children}</StyledContainer>;
}
