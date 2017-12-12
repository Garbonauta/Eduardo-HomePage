import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import SocialNav from '../SocialNav/SocialNav'
import MenuIcon from 'react-icons/lib/md/menu'
import {
  activeNavigation, link, navBar, navBarContent, navElement, navList,
  navIcon, displayNone, displayBlock,
} from './styles.module.css'

export default function TopNav ({me, navElements, onClick, fullNav}) {
  return (
    <nav className={navBar}>
      <div className={navBarContent}>
        <ul className={`${navList} ${fullNav ? displayBlock : displayNone}`}>
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
        <div className={fullNav ? displayBlock : displayNone}>
          <SocialNav me={me}/>
        </div>
        <div className={`${navIcon} ${fullNav ? displayNone : displayBlock}`} onClick={onClick}/>
        <div className={`${navIcon} ${fullNav ? displayNone : displayBlock}`} onClick={onClick}>
          <MenuIcon/>
        </div>
      </div>
    </nav>
  )
}
TopNav.propTypes = {
  fullNav: PropTypes.bool.isRequired,
  me: PropTypes.object.isRequired,
  navElements: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
}
