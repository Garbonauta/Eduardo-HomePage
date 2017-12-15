import React from 'react'
import PropTypes from 'prop-types'
import { LayoutContainer } from 'containers'
import { addLocaleData } from 'react-intl'
import messages from 'data/messages/es'
import es from 'react-intl/locale-data/es'
import 'intl/locale-data/jsonp/es'

addLocaleData(es)

export default function IndexEsTemplate (props) {
  return (
    <LayoutContainer
      {...props}
      i18nMessages={messages} />
  )
}
IndexEsTemplate.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}
