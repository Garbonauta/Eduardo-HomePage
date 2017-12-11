import React from 'react'
import PropTypes from 'prop-types'
import FaChevronCircleUp from 'react-icons/lib/fa/chevron-circle-up'
import scrollToElement from 'scroll-to-element'
import { icon, visibleIcon } from './styles.module.css'

export default function ScrollToTop ({visible}) {
  return (
    <FaChevronCircleUp className={`${icon} ${visible && visibleIcon}`} onClick={() => scrollToElement('#___gatsby')}/>
  )
}
ScrollToTop.propTypes = {
  visible: PropTypes.bool.isRequired,
}
