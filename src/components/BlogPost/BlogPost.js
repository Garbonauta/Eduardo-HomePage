import React from 'react'
import PropTypes from 'prop-types'
import urlJoin from 'url-join'
import { BlogContent, Comments, BlogSocial, TagList } from 'components'
import { getLocaleDateFromString } from 'utils/utils'
import { pageContent, blogInfoContainer, tagRow } from './styles.module.css'

function getLanguageLabel (language) {
  switch (language) {
    case 'en':
      return 'In this post: '
    case 'es':
      return 'En este post: '
    default:
      return null
  }
}

function BlogInfoContainer ({language, blogUrl, blogTitle, blogSummary, tags}) {
  return (
    <div className={blogInfoContainer}>
      <div className={tagRow}>
        {getLanguageLabel(language)}
        <TagList language={language} tags={tags}/>
      </div>
      <hr/>
      <BlogSocial
        language={language}
        url={blogUrl}
        title={blogTitle}
        summary={blogSummary} />
    </div>
  )
}
BlogInfoContainer.propTypes = {
  language: PropTypes.string.isRequired,
  blogUrl: PropTypes.string.isRequired,
  blogTitle: PropTypes.string.isRequired,
  blogSummary: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
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
      createdAt,
      summary,
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
        blogUrl={blogUrl}
        blogTitle={title}
        blogSummary={summary}
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
    author: PropTypes.object.isRequired,
    createdAt: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    content: PropTypes.shape({
      childMarkdownRemark: PropTypes.shape({
        html: PropTypes.string.isRequired,
      }),
    }),
    tags: PropTypes.array.isRequired,
  }),
}
