import React from 'react'
import { getUserLanguage } from 'utils/utils'
import { navigateTo } from 'gatsby-link'

class RedirectIndex extends React.PureComponent {
  constructor (args) {
    super(args)

    if (typeof window !== 'undefined') {
      const {langs, defaultLangKey} = args.data.site.siteMetadata.languages
      const langKey = getUserLanguage(langs, defaultLangKey)
      const homeUrl = `/${langKey}/`

      navigateTo(homeUrl)
    }
  }

  render () {
    return (<div/>)
  }
}

export default RedirectIndex

export const pageQuery = graphql`
  query IndexQuery {    
    site{
      siteMetadata{
        languages {
          defaultLangKey
          langs
        }
      }
    }
  }
`
