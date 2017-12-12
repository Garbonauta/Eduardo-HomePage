import React from 'react'
import PropTypes from 'prop-types'
import { LanguagePicker } from 'components'
import {
  footerElement, developed, copyright, link, jsLink,
  attributions, contentfulLogo, localeInfo,
} from './styles.module.css'

export default function Footer ({ languages, me }) {
  return (
    <footer className={footerElement}>
      <div className={localeInfo}>{
        <LanguagePicker languages={languages} />
      }</div>
      <div className={copyright}>{`Copyright \u00A9 ${me.fullName}. ${(new Date()).getFullYear()} All rights reserved.`}</div>
      <div className={developed}>
        <span>{`Developed by ${me.fullName}. `}</span>
        <span>
          {'Built with '}
          <a href='https://reactjs.org/' className={jsLink}>{'React'}</a>
          {' and '}
          <a href='https://www.gatsbyjs.org/' className={jsLink}>{'GatsbyJS'}</a>
        </span>
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
