import React from 'react'
import PropTypes from 'prop-types'
import Layout from 'layouts/Layout'
import { addLocaleData } from 'react-intl'
import messages from 'data/messages/es'
import es from 'react-intl/locale-data/es'
import 'intl/locale-data/jsonp/es'

addLocaleData(es)

export default function IndexTemplate ({children, data}) {
  return (
    <Layout
      data={data}
      i18nMessages={messages}>
      {children}
    </Layout>
  )
}
IndexTemplate.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}

export const query = graphql`
query AppEsQuery {
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
