const path = require(`path`)
const createPaginatedPages = require('gatsby-paginate')

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

exports.modifyWebpackConfig = ({config, stage}) => {
  config.merge(function (current) {
    current.resolve.root = path.resolve('./src')
    return current
  })
  return config
}

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulBlogPost(sort: {fields: [createdAt], order: DESC}) {
          edges {
            node {
              id
              slug
              node_locale
              title,
              createdAt,
              summary,
              author {
                fullName
              }
              tags {
                id
                slug
                 display
              }
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
        const edges = result.data.allContentfulBlogPost.edges
          .filter(({node: {node_locale: nodeLocale}}) => {
            return nodeLocale === node.node_locale
          })
        createPaginatedPages({
          edges,
          createPage: createPage,
          pageTemplate: `src/templates/index.js`,
          pathPrefix: lang,
        })
        createPage({
          path: `${lang}/post/${node.slug}`,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            slug: node.slug,
            langKey: lang,
            locale: node.node_locale,
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
              component: path.resolve(`./src/templates/tag.js`),
              context: {
                slug: node.slug,
                langKey: lang,
                locale: node.node_locale,
              },
            })
          })
          resolve()
        })
      })
  })
}
