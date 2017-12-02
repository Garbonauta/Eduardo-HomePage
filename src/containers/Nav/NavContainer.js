import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Github from 'react-icons/lib/fa/github'
import LinkedIn from 'react-icons/lib/fa/linkedin'
import MenuIcon from 'react-icons/lib/md/menu'
import {
  activeNavigation, link, navBar, navBarContent, navElement, navList, socialEntry, socialIcon,
  socialList, navIcon, displayNone, displayBlock,
} from './styles.module.css'

export default function NavContainer ({me, navElements, onClick, fullNav}) {
  return (
    <nav className={navBar}>
      <div className={navBarContent}>
        <ul className={`${navList} ${ fullNav ? displayBlock : displayNone}`}>
          {
            navElements.map(element => {
              return (
                <li key={element.title} className={navElement}>
                  <Link
                    exact={true}
                    activeClassName={activeNavigation}
                    className={link}
                    to={element.slug}>
                    {element.displayText}
                  </Link>
                </li>
              )
            })
          }
        </ul>
        <ul className={`${socialList} ${ fullNav ? displayBlock : displayNone}`}>
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
        <div className={`${navIcon} ${ fullNav ? displayNone : displayBlock}`} onClick={onClick}/>
        <div className={`${navIcon} ${ fullNav ? displayNone : displayBlock}`} onClick={onClick}>
          <MenuIcon/>
        </div>
      </div>
    </nav>
  )
}
NavContainer.propTypes = {
  fullNav: PropTypes.bool.isRequired,
  me: PropTypes.object.isRequired,
  navElements: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}
