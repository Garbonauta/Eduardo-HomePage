import React from 'react'
import PropTypes from 'prop-types'
import { getCurrentLanguage } from 'utils/utils'
import IndexEsTemplate from './es'
import IndexEnTemplate from './en'

class RedirectIndex extends React.Component {
  static propTypes={
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          languages: PropTypes.shape({
            langs: PropTypes.array.isRequired,
            defaultLangKey: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }
  render () {
    const {langs, defaultLangKey} = this.props.data.site.siteMetadata.languages
    const pathname = location.pathname || ''
    const langKey = getCurrentLanguage(langs, defaultLangKey, pathname)
    return (
      <div>
        {langKey === 'es' && <IndexEsTemplate {...this.props}/>}
        {langKey === 'en' && <IndexEnTemplate {...this.props}/>}
      </div>
    )
  }
}

export default RedirectIndex

export const pageQuery = graphql`
  query IndexTemplateQuery {    
  site {
    siteMetadata {
      title
      languages {
        defaultLangKey
        langs
      }
      menu {
        label
        slug
      }
    }
  }
  person: contentfulPerson(fullName: {eq: "Eduardo Moreno"}) {
    fullName
    github
    linkedIn
  }
}
`
