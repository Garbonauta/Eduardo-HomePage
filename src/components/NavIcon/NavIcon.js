import React from 'react'
import PropTypes from 'prop-types'
import { icon, active } from './styles.module.css'

export default function NavIcon ({navMenuOpen}) {
  return (
    <a href='#' className={`${icon} ${navMenuOpen && active}`}>
      <span/>
    </a>
  )
}
NavIcon.propTypes = {
  navMenuOpen: PropTypes.bool.isRequired,
}
