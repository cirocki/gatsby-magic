import * as React from "react"
import { SEO } from "../components/Seo"
import type { HeadProps } from "gatsby"
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

export function Head(props: HeadProps) {
  return (
    <SEO title="Index page title" description="Index page description">
    </SEO>
  )
}