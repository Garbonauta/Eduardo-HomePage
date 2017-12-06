import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { tag } from './styles.module.css'

export default function Tag ({name, to}) {
  return (
    <Link className={tag} to={to}>
      {name.toUpperCase()}
    </Link>
  )
}
Tag.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}
