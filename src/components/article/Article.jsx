import React from 'react'
import './article.css'

const Article = ({ img, date, title }) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className="gpt3__blog-container_article-image">
        <img src={img} alt='blog_picture' />
      </div>
      <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
      <a href="#">Read Full Article</a>
      </div>
    </div>
  )
}

export default Article
