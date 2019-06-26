import React from "react"
// import { Link } from "gatsby"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
    <SEO title="Hot Off The Press" />
    <div>
      <h1>My WordPress Blog</h1>
      <h4>Posts</h4>
      {data.allWordpressPost.edges.map(({ node }) => (
        <div>
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
