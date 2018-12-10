import React from 'react';
import ArticleThumb from './ArticleThumb.js';
import {Link} from 'react-router-dom';

const SingleCategory = (props) => {


  const articles = props.articles.map(article => {
    return (
      <li key={article.id} className="article-thumb">
        <ArticleThumb articleThumb={article}/>
      </li>
    )
  })

  return (
    <ul>
      {articles}
    </ul>
  )

}

export default SingleCategory;
