import React from "react";
import { useSiteMetadata } from "../../../components/hooks/use-site-metadata";
import styled from "styled-components";

export default function Copyrights() {
  const today: Date = new Date();
  const yearToday: number = today.getFullYear();
  const { title: copyrightsOwner } = useSiteMetadata();

  const StyledParagraph = styled.p`
    padding: 10px 0;
  `;

  return (
    <div>
      <StyledParagraph>
        © {yearToday} {copyrightsOwner} - All rights reserved.
      </StyledParagraph>
    </div>
  );
}
