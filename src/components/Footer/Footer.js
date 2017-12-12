import React from 'react'
import PropTypes from 'prop-types'
import { LanguagePicker } from 'components'
import { FormattedMessage } from 'react-intl'
import {
  footerElement, copyright, link,
  attributions, contentfulLogo, localeInfo,
} from './styles.module.css'

export default function Footer ({ languages, me }) {
  return (
    <footer className={footerElement}>
      <div className={localeInfo}>{
        <LanguagePicker languages={languages} />
      }</div>
      <div className={copyright}>
        <FormattedMessage id='footer.copyright'/>
        {` \u00A9 ${me.fullName}. ${(new Date()).getFullYear()}. `}
        <FormattedMessage id='footer.rights'/>
      </div>
      <div className={attributions}>
        <a
          href='https://www.contentful.com/'
          className={link}
          rel='nofollow noopener noreferrer'
          target='_blank'>
          <img
            src='https://images.contentful.com/fo9twyrwpveg/44baP9Gtm8qE2Umm8CQwQk/c43325463d1cb5db2ef97fca0788ea55/PoweredByContentful_LightBackground.svg'
            className={contentfulLogo} alt='Powered by Contentful'/>
        </a>
      </div>
    </footer>
  )
}
Footer.propTypes = {
  languages: PropTypes.array.isRequired,
  me: PropTypes.object.isRequired,
}
