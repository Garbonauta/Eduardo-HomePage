const path = require(`path`)

function getLanguageFromLocale (locale) {
  switch (locale) {
    case 'en-US':
      return 'en'
    case 'es':
      return 'es'
    default:
      return locale
  }
}

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
        const lang = getLanguageFromLocale(node.node_locale)
        createPage({
          path: `${lang}/post/${node.slug}`,
          component: path.resolve(`./src/templates/blogPost/index.${lang}.js`),
          layout: lang,
          context: {
            slug: node.slug,
          },
        })
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
            const lang = getLanguageFromLocale(node.node_locale)
            createPage({
              path: `${lang}/tag/${node.slug}`,
              component: path.resolve(`./src/templates/tag/index.${lang}.js`),
              layout: lang,
              context: {
                slug: node.slug,
              },
            })
          })
          resolve()
        })
      })
  })
}
