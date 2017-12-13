import React from 'react'
import PropTypes from 'prop-types'
import { LayoutContainer } from 'containers'
import { addLocaleData } from 'react-intl'
import messages from 'data/messages/en'
import en from 'react-intl/locale-data/en'
import 'intl/locale-data/jsonp/en'

addLocaleData(en)

export default function IndexTemplate ({children, data}) {
  return (
    <LayoutContainer
      data={data}
      i18nMessages={messages}>
      {children}
    </LayoutContainer>
  )
}
IndexTemplate.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

export const query = graphql`
query AppEnQuery {
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
