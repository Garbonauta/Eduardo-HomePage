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

function getBrowserLocale () {
  if (typeof window === 'undefined') {
    return null
  }

  const first = window.navigator.languages
    ? window.navigator.languages[0]
    : null

  const lang = first ||
    window.navigator.language ||
    window.navigator.browserLanguage

  return lang
}

function getValidLanguage (langs, defaultLangKey, langToValidate) {
  const browserLanguage = langToValidate ? langToValidate.split('-')[0] : defaultLangKey
  const ocurrence = langs.indexOf(browserLanguage)

  return ocurrence > -1 ? langs[ocurrence] : defaultLangKey
}

function getUrlForLang (currentLang, currLocation, targetLang) {
  const homeLink = `/${currentLang}/`
  return currLocation === '/' || !currLocation.startsWith(homeLink)
    ? homeLink
    : currLocation.replace(homeLink, `/${targetLang}/`)
}

export function getUserLanguage (langs, defaultLangKey) {
  const browserLocale = getBrowserLocale()
  return getValidLanguage(langs, defaultLangKey, browserLocale)
}

export function getCurrentLanguage (langs, defaultLangKey, url) {
  const langKey = url.split('/')[1]
  return getValidLanguage(langs, defaultLangKey, langKey)
}

export function getFormattedLangList (langs, currentLang) {
  const currLocation = location.pathname

  return langs.map(langKey => {
    return {
      langKey,
      selected: currentLang === langKey,
      link: getUrlForLang(currentLang, currLocation, langKey),
    }
  })
}
