import React from 'react';
import ArticleThumb from './ArticleThumb';

const ArticleList = (props) => {

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

export default ArticleList;
