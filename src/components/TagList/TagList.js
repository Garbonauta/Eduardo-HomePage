import React from 'react'
import PropTypes from 'prop-types'
import Tag from '../Tag/Tag'
import { formatSlugForTagUrl } from '../../utils/utils'

export default function TagList ({language, tags}) {
  return (
    <div>
      {
        tags.map(({id, slug, display}) => {
          return <Tag key={id} name={display} to={formatSlugForTagUrl(language, slug)}/>
        })
      }
    </div>
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
