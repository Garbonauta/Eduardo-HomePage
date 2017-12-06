const path = require(`path`)

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
              node_locale
            }
          }
        }
      }
    `).then(result => {
      if (result.error) {
        reject(result.error)
      }
      result.data.allContentfulBlogPost.edges.map(({node}) => {
        if (node.node_locale === 'en-US') {
          createPage({
            path: `en/post/${node.slug}`,
            component: path.resolve(`./src/templates/blogPost/index.en.js`),
            layout: 'en',
            context: {
              slug: node.slug,
            },
          })
        } else if (node.node_locale === 'es') {
          createPage({
            path: `es/post/${node.slug}`,
            component: path.resolve(`./src/templates/blogPost/index.es.js`),
            layout: 'es',
            context: {
              slug: node.slug,
            },
          })
        }
      })
      resolve()
    })
      .then(() => {
        graphql(`
        {
          allContentfulTag {
            edges {
              node {
                slug
                node_locale
              }
            }
          }
        }
     `).then(result => {
          if (result.error) {
            reject(result.error)
          }
          result.data.allContentfulTag.edges.map(({node}) => {
            if (node.node_locale === 'en-US') {
              createPage({
                path: `en/tag/${node.slug}`,
                component: path.resolve(`./src/templates/tag/index.en.js`),
                layout: 'en',
                context: {
                  slug: node.slug,
                },
              })
            } else if (node.node_locale === 'es') {
              createPage({
                path: `es/tag/${node.slug}`,
                component: path.resolve(`./src/templates/tag/index.es.js`),
                layout: 'es',
                context: {
                  slug: node.slug,
                },
              })
            }
          })
          resolve()
        })
      })
  })
}
