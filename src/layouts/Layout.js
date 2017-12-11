import React from 'react'
import PropTypes from 'prop-types'
import App from '../containers/App/App'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    data: PropTypes.shape({
      site: PropTypes.object.isRequired,
      navigation: PropTypes.object.isRequired,
      person: PropTypes.object.isRequired,
    }),
  }
  getLanguageData = () => {
    const url = location.pathname
    const {langs, defaultLangKey} = this.props.data.site.siteMetadata.languages
    const langKey = getCurrentLangKey(langs, defaultLangKey, url)
    const homeLink = `/${langKey}/`
    return getLangs(langs, langKey, getUrlForLang(homeLink, url))
  }
  getNavigationElements = () => {
    const edges = this.props.data.navigation.edges

    return edges.map(element => {
      return element.node
    }).sort((a, b) => {
      return a.order - b.order
    })
  }

  render () {
    const langsMenu = this.getLanguageData()
    const navElements = this.getNavigationElements()
    const {children, data: {person}} = this.props

    return (
      <App
        languages={langsMenu}
        me={person}
        navElements={navElements}
        socialHeader={'Find me on:'}>
        {children}
      </App>
    )
  }
}

export default Layout
