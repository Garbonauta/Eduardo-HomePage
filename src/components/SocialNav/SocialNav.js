import React from 'react'
import PropTypes from 'prop-types'
import Github from 'react-icons/lib/fa/github'
import LinkedIn from 'react-icons/lib/fa/linkedin'
import { socialList, socialEntry, socialIcon } from './styles.module.css'

export default function SocialNav ({ me }) {
  return (
    <ul className={`${socialList}`}>
      <li className={socialEntry}>
        <a className={socialIcon} href={me.github}>
          <Github/>
        </a>
      </li>
      <li className={socialEntry}>
        <a className={socialIcon} href={me.linkedIn}>
          <LinkedIn/>
        </a>
      </li>
    </ul>
  )
}
SocialNav.propTypes = {
  me: PropTypes.object.isRequired,
}
