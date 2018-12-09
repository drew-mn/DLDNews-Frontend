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

//   const {title, media, summary, id} = props.articles;
//
//   return (
//     <div>
//       <Link to={'articles/' + id}
//       className='single-category'> {media}</Link>
//       <h4>{title}</h4>
//       <p>{summary}</p>
//     </div>
//   )
//
// }

export default SingleCategory;
