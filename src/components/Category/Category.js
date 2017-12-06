import React from 'react'
import PropTypes from 'prop-types'
import { categoryTag } from './styles.module.css'

export default function Category ({name, to}) {
  return (
    <div className={categoryTag}>{name}</div>
  )
}
Category.propTypes = {
  name: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}
