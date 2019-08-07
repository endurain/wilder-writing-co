import React from "react"
import Layout from "../components/layout"

const Post = ({ data }) => {
  const post = data.markdownRemark
  const title = post.frontmatter.title
  const date = post.frontmatter.date
  const html = post.html

  return (
    <Layout>
        <h1>{title}</h1>
        <p>{date}</p>
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}
export const query = graphql`
  query($pathSlug: String!) {
    allWordpressPost {
    edges {
      node {
        id
        title
        content
      }
    }
  }
}  
`
export default Post
