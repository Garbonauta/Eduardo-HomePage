import React from 'react'
import { FormattedDate } from 'react-intl'
import urlJoin from 'url-join'

export function getLocaleDateFromString (dateString) {
  return <FormattedDate
    value={dateString}
    year='numeric'
    month='long'
    day='2-digit'/>
}

export function removeNodeContentfulArray (edges) {
  return edges.map(edge => {
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

export function formatSlugForPostUrl (language, slug) {
  return urlJoin(language, 'post', slug)
}

export function formatSlugForTagUrl (language, slug) {
  return urlJoin(language, 'tag', slug)
}
