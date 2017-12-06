import React from 'react'
import PropTypes from 'prop-types'
import BlogContent from '../BlogContent/BlogContent'
import Category from '../Category/Category'
import Tag from '../Tag/Tag'
import { getLocaleDateFromString } from '../../utils/utils'
import { pageContent, blogInfoContainer, flexRow, authorContainer, tagContainer } from './styles.module.css'

function formatSlugForTagUrl (language, slug) {
  return `${language}/tag/${slug}`
}

function BlogInfoContainer ({language, author, category, tags}) {
  return (
    <div className={blogInfoContainer}>
      <div className={authorContainer}>{author}</div>
      <div className={flexRow}>
        <div className={tagContainer}>
          {
            tags.map(({id, slug, display}) => {
              return <Tag key={id} name={display} to={formatSlugForTagUrl(language, slug)}/>
            })
          }
        </div>
        <Category name={category} to={category}/>
      </div>
    </div>
  )
}

BlogInfoContainer.propTypes = {
  language: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
  })).isRequired,
}

export default function BlogPost ({language, post}) {
  const {
    title,
    author,
    category,
    createdAt,
    content: {
      childMarkdownRemark: {
        html,
      },
    },
    tags,
  } = post
  return (
    <div className={pageContent}>
      <h1>{title}</h1>
      <div>{getLocaleDateFromString(language, createdAt)}</div>
      <BlogContent content={html}/>
      <BlogInfoContainer language={language} author={author} category={category} tags={tags}/>
    </div>
  )
}
BlogPost.propTypes = {
  language: PropTypes.string.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    content: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        html: PropTypes.string.isRequired,
      }),
    }),
    tags: PropTypes.array.isRequired,
  }),
}
