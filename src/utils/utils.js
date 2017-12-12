import urlJoin from 'url-join'
import { getCurrentLangKey } from 'ptz-i18n'

export function getLanguageInformation (languages) {
  const {defaultLangKey: defaultLang, langs} = languages
  const url = location.pathname
  return {
    url,
    langs,
    defaultLang,
    currentLang: getCurrentLangKey(
      langs,
      defaultLang,
      url),
  }
}

export function getLocaleDateFromString (locale, dateString) {
  var options = {year: 'numeric', month: 'long', day: 'numeric'}
  return new Date(dateString).toLocaleString(locale, options)
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
