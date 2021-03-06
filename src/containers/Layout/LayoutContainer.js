import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'components'
import { getCurrentLanguage, getFormattedLangList } from 'utils/utils'
import { IntlProvider } from 'react-intl'
import 'intl'
import 'typeface-open-sans'
import 'prismjs-okaidia-theme/prism-okaidia.css'

class LayoutContainer extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          title: PropTypes.string.isRequired,
          languages: PropTypes.shape({
            defaultLangKey: PropTypes.string.isRequired,
            langs: PropTypes.array.isRequired,
          }).isRequired,
          menu: PropTypes.arrayOf(PropTypes.object).isRequired,
        }).isRequired,
      }).isRequired,
      person: PropTypes.object.isRequired,
    }).isRequired,
    i18nMessages: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    match: PropTypes.object.isRequired,
  }
  state = {
    langs: this.props.data.site.siteMetadata.languages.langs,
    defaultLang: this.props.data.site.siteMetadata.languages.defaultLangKey,
  }
  getLanguageData = (currentLang) => {
    const {langs} = this.state
    return getFormattedLangList(langs, currentLang, this.props.location.pathname)
  }

  render () {
    const {
      children,
      data: {
        person,
        site: {
          siteMetadata: {
            menu,
          },
        },
      },
      i18nMessages,
      history,
      location,
      match,
    } = this.props
    const currentLang = getCurrentLanguage(this.state.langs, this.state.defaultLang, location.pathname)
    const langsMenu = this.getLanguageData(currentLang)

    return (
      <IntlProvider
        locale={currentLang}
        messages={i18nMessages}>
        <Layout
          currentLanguage={currentLang}
          languages={langsMenu}
          me={person}
          navElements={menu}
          history={history}
          location={location}
          match={match}>
          {children}
        </Layout>
      </IntlProvider>
    )
  }
}

export default LayoutContainer
