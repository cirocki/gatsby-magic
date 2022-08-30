import { graphql, useStaticQuery } from "gatsby";

type ReturnValue = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      siteUrl: string;
      pageAuthor: string;
      pageAuthorUrl: string;
    };
  };
};

export const useSiteMetadata = () => {
  const data = useStaticQuery<ReturnValue>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          pageAuthor
          pageAuthorUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
