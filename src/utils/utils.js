export function getLocaleDateFromString (locale, dateString) {
  var options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleString(locale, options)
}

export function removeNodeContentfulArray (posts) {
  return posts.edges.map(edge => {
    return edge.node
  })
}

export function sortContentfulArrayByCreateAt (array) {
  return array.sort((a, b) => {
    const aDate = new Date(a.createdAt)
    const bDate = new Date(b.createdAt)
    return bDate - aDate
  })
}

export function formatSlugForTagUrl (language, slug) {
  return `${language}/tag/${slug}`
}

export function formatSlugForCategoryUrl (language, slug) {
  return `${language}/category/${slug}`
}
