import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { getLocaleDateFromString, formatSlugForCategoryUrl } from '../../utils/utils'
import { blogEntry, blogTitle, blogSummary, blogFoot, supplementalInfo, categoryTag } from './styles.module.css'
import Category from '../Category/Category'

function formatDateString (locale, publishDate) {
  const dateString = getLocaleDateFromString(locale, publishDate)
  let joinVal
  switch (locale) {
    case 'en':
      joinVal = 'on'
      break
    case 'es':
      joinVal = 'el'
      break
    default:
      break
  }
  return ` ${joinVal} ${dateString}`
}

function formatSlugForLang (language, slug) {
  return `${language}/post/${slug}`
}

function BlogListFooter ({language, author, createdAt, category: {id, slug, display: categoryDisplay}}) {
  return (
    <div className={blogFoot}>
      <div className={supplementalInfo}>
        <span>{author}</span>
        <span>{formatDateString(language, createdAt)}</span>
      </div>
      <Category name={categoryDisplay} to={formatSlugForCategoryUrl(language, slug)}/>
    </div>
  )
}

BlogListFooter.propTypes = {
  language: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
  }).isRequired,
  createdAt: PropTypes.string.isRequired,
}

export default function BlogList ({posts, language}) {
  return (
    <div>
      {posts.map(post => {
        const {
          id,
          slug,
          title,
          category,
          createdAt,
          summary,
          author,
        } = post
        return (
          <div key={id} className={blogEntry}>
            <Link className={blogTitle} to={formatSlugForLang(language, slug)}>
              <h2>{title}</h2>
            </Link>
            <p className={blogSummary}>{summary}</p>
            <BlogListFooter
              language={language}
              author={author}
              category={category[0]}
              createdAt={createdAt}/>
          </div>
        )
      })}
    </div>
  )
}
BlogList.propTypes = {
  language: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.array.isRequired,
    createdAt: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })),
}
