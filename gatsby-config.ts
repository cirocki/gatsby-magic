import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `magic-gatsby`,
    siteUrl: `https://alocasia.mc`,
    pageAuthor: "cirocki.pl",
    pageAuthorUrl: "https://cirocki.pl/",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-preload-fonts",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `aboreto\:300,400`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    "gatsby-plugin-image",
    // "gatsby-plugin-sitemap",
    // {
    //   resolve: "gatsby-plugin-manifest",
    //   options: {
    //     // icon: "src/images/icon.png",
    //   },
    // },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
  ],
};

export default config;
