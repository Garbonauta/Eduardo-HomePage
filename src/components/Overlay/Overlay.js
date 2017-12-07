import React from 'react'
import PropTypes from 'prop-types'
import { overlay, overlayVisible, overlayHidden } from './styles.module.css'

export default function Overlay ({visible, onClick}) {
  return (
    <div className={`${overlay} ${visible ? overlayVisible : overlayHidden}`} onClick={onClick}/>
  )
}
Overlay.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
