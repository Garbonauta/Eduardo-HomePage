import React from 'react'
import PropTypes from 'prop-types'
import { LayoutContainer } from 'containers'
import { addLocaleData } from 'react-intl'
import messages from 'data/messages/en'
import en from 'react-intl/locale-data/en'
import 'intl/locale-data/jsonp/en'

addLocaleData(en)

export default function IndexEnTemplate (props) {
  return (
    <LayoutContainer
      {...props}
      i18nMessages={messages} />
  )
}
IndexEnTemplate.propTypes = {
  children: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
}
