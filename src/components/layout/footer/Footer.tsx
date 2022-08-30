import React from "react";
import styled from "styled-components";
import Container from "../container/Container";
import Author from "./Author";
import Copyrights from "./Copyrights";

function Footer() {
  const StyledFooter = styled.footer`
    background: black;
  `;
  const StyledWrapper = styled.div`
    display: flex;
    justify-content: ${(props) =>
      props.columns === "single" ? "center" : "space-between"};
  `;
  return (
    <StyledFooter>
      <Container>
        <StyledWrapper columns="double">
          <Copyrights />
          <Author />
        </StyledWrapper>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
