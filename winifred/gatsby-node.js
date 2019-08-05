const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = (({graphql, actions}) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('src/templates/blog-post.js')

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    path
                    title
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          return Promise.reject(result.errors)
        }

        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach(({node}) => {
          const path = node.frontmatter.path

          createPage({
            path,
            component: postTemplate,
            context: {
              pathSlug: path
            }
          })
        })
      })
    )
  })
})
