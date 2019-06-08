import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ServicesPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <h1>Portfolio</h1>
    <p>My Portfolio yo</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ServicesPage
