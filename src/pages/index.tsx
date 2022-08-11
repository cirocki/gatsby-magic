import * as React from "react"
import type { HeadFC } from "gatsby"
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components'

import GlobalCSS from '../assets/styles/global-styles/global.css.js'
import Layout from "../components/layout/Layout.tsx";




const IndexPage = () => {


  const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
  return (
    <ThemeProvider theme={{ fontFamily: 'Helvetica Neue' }}>
      {/* przeniesc do LAYOUT  */}
<GlobalCSS />
<Layout>

    <main>
      <h1>Start</h1>
      <Button primary>Kliknij</Button>
    </main>
</Layout>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
