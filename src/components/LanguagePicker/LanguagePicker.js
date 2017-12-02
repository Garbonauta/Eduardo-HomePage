import React from 'react'
import PropTypes from 'prop-types'
import { container, flag } from './styles.module.css'

function getFlag (langKey) {
  switch (langKey) {
    case 'en':
      return 'English'
    case 'es':
      return 'Español'
    default:
      return null
  }
}

export default function LanguagePicker ({languages}) {
  return (
    <div className={container}>
      {languages.map(lang => {
        return (
          <a key={lang.langKey} href={lang.link} className={flag}>
            {getFlag(lang.langKey)}
          </a>
        )
      })}
    </div>
  )
}
LanguagePicker.propTypes = {
  languages: PropTypes.array.isRequired,
}
