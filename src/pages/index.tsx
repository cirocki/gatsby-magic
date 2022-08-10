import * as React from "react"
import type { HeadFC } from "gatsby"
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components'

import GlobalCSS from '../assets/styles/global-styles/global.css.js'




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
<GlobalCSS />
    <main>
      <h1>Start</h1>
      <Button primary>Kilknij</Button>
    </main>
    </ThemeProvider>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
