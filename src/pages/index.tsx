import * as React from "react"
import type { HeadFC } from "gatsby"



const IndexPage = () => {
  return (
    <main>
      <h1>Start</h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
