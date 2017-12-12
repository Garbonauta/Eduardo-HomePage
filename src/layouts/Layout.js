import React from 'react'
import PropTypes from 'prop-types'
import { App } from 'containers'
import { getLangs, getUrlForLang } from 'ptz-i18n'
import { removeNodeContentfulArray, getLanguageInformation } from 'utils/utils'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    data: PropTypes.shape({
      site: PropTypes.object.isRequired,
      navigation: PropTypes.object.isRequired,
      person: PropTypes.object.isRequired,
    }),
  }
  state = {
    ...getLanguageInformation(this.props.data.site.siteMetadata.languages),
  }
  getLanguageData = () => {
    const {langs, currentLang, url} = this.state
    const homeLink = `/${currentLang}/`
    return getLangs(langs, currentLang, getUrlForLang(homeLink, url))
  }
  getNavigationElements = () => {
    const edges = this.props.data.navigation.edges

    return removeNodeContentfulArray(edges)
      .sort((a, b) => {
        return a.order - b.order
      })
  }

  render () {
    const langsMenu = this.getLanguageData()
    const navElements = this.getNavigationElements()
    const {children, data: {person}} = this.props

    return (
      <App
        currentLanguage={this.state.currentLang}
        languages={langsMenu}
        me={person}
        navElements={navElements}>
        {children}
      </App>
    )
  }
}

export default Layout
