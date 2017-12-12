import React from 'react'
import PropTypes from 'prop-types'
import { App } from 'containers'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'
import { IntlProvider } from 'react-intl'
import 'intl'
import { removeNodeContentfulArray } from 'utils/utils'

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    data: PropTypes.shape({
      site: PropTypes.object.isRequired,
      navigation: PropTypes.object.isRequired,
      person: PropTypes.object.isRequired,
    }).isRequired,
    i18nMessages: PropTypes.object.isRequired,
  }
  state = {
    langs: this.props.data.site.siteMetadata.languages.langs,
    defaultLang: this.props.data.site.siteMetadata.languages.defaultLangKey,
  }
  getLanguageData = (currentLang) => {
    const {langs} = this.state
    const homeLink = `/${currentLang}/`
    return getLangs(langs, currentLang, getUrlForLang(homeLink, location.pathname))
  }
  getNavigationElements = () => {
    const edges = this.props.data.navigation.edges

    return removeNodeContentfulArray(edges)
      .sort((a, b) => {
        return a.order - b.order
      })
  }

  render () {
    const navElements = this.getNavigationElements()
    const {children, data: {person}, i18nMessages} = this.props
    const currentLang = getCurrentLangKey(this.state.langs, this.state.defaultLang, location.pathname)
    const langsMenu = this.getLanguageData(currentLang)

    return (
      <IntlProvider
        locale={currentLang}
        messages={i18nMessages}>
        <App
          currentLanguage={currentLang}
          languages={langsMenu}
          me={person}
          navElements={navElements}>
          {children}
        </App>
      </IntlProvider>
    )
  }
}

export default Layout
