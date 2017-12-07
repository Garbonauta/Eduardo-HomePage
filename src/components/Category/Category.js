import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { categoryTag } from './styles.module.css'

export default function Category ({name, to}) {
  return (
    <Link className={categoryTag} to={to}>
      {name.toUpperCase()}
    </Link>
  )
}
Category.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}
