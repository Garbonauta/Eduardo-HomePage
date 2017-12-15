import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { TagList, NoPost } from 'components'
import { getLocaleDateFromString, formatSlugForPostUrl } from 'utils/utils'
import { FormattedMessage } from 'react-intl'
import Observer from 'react-intersection-observer'
import { blogEntry, blogTitle, blogSummary, blogFoot, supplementalInfo } from './styles.module.css'

function BlogListFooter ({language, author, tags, createdAt}) {
  return (
    <div className={blogFoot}>
      <div className={supplementalInfo}>
        {author}
        {' '}
        {<FormattedMessage id='on'/>}
        {' '}
        <TagList language={language} tags={tags}/>
        {' | '}
        {getLocaleDateFromString(createdAt)}
      </div>
    </div>
  )
}

BlogListFooter.propTypes = {
  language: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  createdAt: PropTypes.string.isRequired,
}

function BlogListSummary ({language, slug, title, createdAt, summary, author: {fullName}, tags}) {
  return (
    <div className={blogEntry}>
      <Link className={blogTitle} to={formatSlugForPostUrl(language, slug)}>
        {title}
      </Link>
      <p className={blogSummary}>{summary}</p>
      <BlogListFooter
        language={language}
        author={fullName}
        tags={tags}
        createdAt={createdAt}/>
    </div>
  )
}

BlogListSummary.propTypes = {
  language: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  author: PropTypes.shape({
    fullName: PropTypes.string.isRequired,
  }).isRequired,
  tags: PropTypes.array.isRequired,
}

export default function BlogList ({posts, language}) {
  return (
    <div>
      {posts.length > 0
        ? posts.map(post => {
          const {
            id,
            slug,
            title,
            createdAt,
            summary,
            author,
            tags,
          } = post
          return (
            <BlogListSummary
              key={id}
              language={language}
              slug={slug}
              title={title}
              createdAt={createdAt}
              summary={summary}
              author={author}
              tags={tags}/>
          )
        })
        : <NoPost/>}
    </div>
  )
}
BlogList.propTypes = {
  language: PropTypes.string.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    author: PropTypes.shape({
      fullName: PropTypes.string.isRequired,
    }).isRequired,
    tags: PropTypes.array.isRequired,
  })).isRequired,
}
