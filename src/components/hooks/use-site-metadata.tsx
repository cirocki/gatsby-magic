import { graphql, useStaticQuery } from "gatsby"

type ReturnValue = {
  site: {
    siteMetadata: {
      title: string
      description: string
      siteUrl: string
    }
  }
}

export const useSiteMetadata = () => {
  const data = useStaticQuery<ReturnValue>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `)

  return data.site.siteMetadata
}