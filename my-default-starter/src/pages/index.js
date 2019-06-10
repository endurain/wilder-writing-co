import React from "react"
//uncomment to add links to homepage
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="container">
      <h1>Greetings</h1>
      <p>Front Page Content here</p>
      
    </div>
  </Layout>
)

export default IndexPage
