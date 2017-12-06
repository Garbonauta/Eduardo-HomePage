export function getLocaleDateFromString (locale, dateString) {
  var options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(dateString).toLocaleString(locale, options)
}

export function removeNodeContentfulArray (posts) {
  return posts.edges.map(edge => {
    return edge.node
  })
}