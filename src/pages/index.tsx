import * as React from "react"
import type { HeadFC } from "gatsby"



import Layout from "../components/layout/Layout";




const IndexPage = () => {

  return (


<Layout>

    <main>
      <h1>Start</h1>

    </main>
</Layout>
 
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
