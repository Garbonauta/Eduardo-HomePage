import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default function SlideMenuLink ({ className, to, children, onClick }) {
  return <Link className={className} to={to} onClick={onClick}>{children}</Link>
}
SlideMenuLink.propTypes = {
  className: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}
