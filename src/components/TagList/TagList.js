import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { formatSlugForTagUrl } from 'utils/utils'
import { link } from './styles.module.css'

export default function TagList ({language, tags}) {
  const length = tags.length
  return (
    <span>
      {
        tags.map(({id, slug, display}) => {
          return (
            <Link key={id} to={formatSlugForTagUrl(language, slug)} className={link}>
              {display}
            </Link>
          )
        }).reduce((accum, currLink, currIndex) => {
          accum.push(currLink)
          currIndex !== length - 1 && accum.push(', ')
          return accum
        }, [])
      }
    </span>
  )
}
TagList.propTypes = {
  language: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
  })).isRequired,
}
