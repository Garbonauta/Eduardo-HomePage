import React from 'react'
import PropTypes from 'prop-types'
import SlideMenu from '../../components/SlideMenu/SlideMenu'
import SlideMenuLink from '../../components/SlideMenuLink/SlideMenuLink'
import Github from 'react-icons/lib/fa/github'
import LinkedIn from 'react-icons/lib/fa/linkedin'
import { link, socialEntry, socialIcon, socialList } from './styles.module.css'

export default function MobileMenuContainer ({me, visible, closeMenuAction}) {
  return (
    <SlideMenu visible={visible} closeMenuAction={closeMenuAction}>
      <SlideMenuLink
        className={link}
        to='/'
        onClick={closeMenuAction}>
        {'Home'}
      </SlideMenuLink>
      <SlideMenuLink
        className={link}
        to='/about'
        onClick={closeMenuAction}>
        {'About'}
      </SlideMenuLink>
      <hr/>
      <span>{'Find me on:'}</span>
      <ul className={socialList}>
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
    </SlideMenu>
  )
}
MobileMenuContainer.propTypes = {
  me: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  closeMenuAction: PropTypes.func.isRequired,
}
