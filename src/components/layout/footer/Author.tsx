import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { useSiteMetadata } from "../../../components/hooks/use-site-metadata";
import styled from "styled-components";

export default function Author() {
  const { pageAuthor, pageAuthorUrl } = useSiteMetadata();
  const StyledLink = styled.a`
    padding: 10px 0;
    display: block;
  `;
  return (
    <div>
      <StyledLink href={pageAuthorUrl}>{pageAuthor}</StyledLink>
    </div>
  );
}
