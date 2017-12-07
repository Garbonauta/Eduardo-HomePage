import React from 'react'
import PropTypes from 'prop-types'
import urlJoin from 'url-join'
import BlogContent from '../BlogContent/BlogContent'
import Category from '../Category/Category'
import Comments from '../Comments/Comments'
import Tag from '../Tag/Tag'
import { getLocaleDateFromString, formatSlugForTagUrl, formatSlugForCategoryUrl } from '../../utils/utils'
import { pageContent, blogInfoContainer, flexRow, authorContainer, tagContainer } from './styles.module.css'

function BlogInfoContainer ({language, author, category: {id, slug: categorySlug, display: categoryDisplay}, tags}) {
  return (
    <div className={blogInfoContainer}>
      <div className={authorContainer}>{author}</div>
      <div className={flexRow}>
        <div className={tagContainer}>
          {
            tags.map(({id, slug: tagSlug, display}) => {
              return <Tag key={id} name={display} to={formatSlugForTagUrl(language, tagSlug)}/>
            })
          }
        </div>
        <Category name={categoryDisplay} to={formatSlugForCategoryUrl(language, categorySlug)}/>
      </div>
    </div>
  )
}
BlogInfoContainer.propTypes = {
  language: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    display: PropTypes.string.isRequired,
  })).isRequired,
}

export default function BlogPost (
  {
    language,
    site: {
      siteMetadata: {
        title: siteTitle,
        siteUrl,
      },
    },
    post: {
      slug,
      title,
      author,
      category,
      createdAt,
      content: {
        childMarkdownRemark: {
          html,
        }},
      tags}}) {
  const blogUrl = urlJoin(siteUrl, language, 'post', slug)
  return (
    <div className={pageContent}>
      <h1>{title}</h1>
      <div>{getLocaleDateFromString(language, createdAt)}</div>
      <BlogContent content={html}/>
      <BlogInfoContainer
        language={language}
        author={author}
        category={category[0]}
        tags={tags}/>
      <Comments slug={slug} title={title} url={blogUrl}/>
    </div>
  )
}
BlogPost.propTypes = {
  language: PropTypes.string.isRequired,
  site: PropTypes.shape({
    siteMetadata: PropTypes.shape({
      title: PropTypes.string.isRequired,
      siteUrl: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.array.isRequired,
    createdAt: PropTypes.string.isRequired,
    content: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        html: PropTypes.string.isRequired,
      }),
    }),
    tags: PropTypes.array.isRequired,
  }),
}
