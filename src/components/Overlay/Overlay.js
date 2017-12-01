import React from 'react'
import PropTypes from 'prop-types'
import { overlay, overlayVisible, overlayHidden } from './styles.module.css'

export default function Overlay ({ visible, onClick }) {
  return (
    <div className={overlay}>
      <div className={visible ? overlayVisible : overlayHidden} onClick={onClick}/>
    </div>
  )
}
Overlay.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
