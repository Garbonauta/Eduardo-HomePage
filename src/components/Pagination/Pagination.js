import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import ChevronLeft from 'react-icons/lib/md/chevron-left'
import ChevronRight from 'react-icons/lib/md/chevron-right'
import { list, link, chevron, disabled, listElement, active } from './styles.module.css'

export default function Pagination ({current, first, last, pageCount, baseUrl}) {
  let pages = []
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i)
  }
  return (
    <ul className={list}>
      <li className={listElement}>
        {!first
          ? <Link to={`${baseUrl}/`} className={chevron}>
            <ChevronLeft/>
          </Link>
          : <div className={`${chevron} ${disabled}`}><ChevronLeft/></div>
        }
      </li>
      {pages.map(page => {
        return (
          <li key={page} className={listElement}>
            <Link
              to={`${baseUrl}/${page > 1 ? page : ''}`}
              className={link}
              activeClassName={active}
              exact={true}>
              {page}
            </Link>
          </li>
        )
      })}
      <li className={listElement}>
        {!last
          ? <Link to={`${baseUrl}/${pageCount}`} className={chevron}>
            <ChevronRight/>
          </Link>
          : <div className={`${chevron} ${disabled}`}><ChevronRight/></div>}
      </li>
    </ul>
  )
}
Pagination.propTypes = {
  current: PropTypes.number.isRequired,
  first: PropTypes.bool.isRequired,
  last: PropTypes.bool.isRequired,
  pageCount: PropTypes.number.isRequired,
  baseUrl: PropTypes.string.isRequired,
}
