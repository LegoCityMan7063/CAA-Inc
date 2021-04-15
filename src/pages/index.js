import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
      <SEO title="Home" />
      <h1>This is the home page.</h1>
      <p>This is a sentence.</p>
      {/*<div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>*/}
      {/*    <Image />*/}
      {/*</div>*/}

      <Link to="/gallery/">Go to gallery</Link>
  </Layout>
)

export default IndexPage