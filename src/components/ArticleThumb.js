import React from 'react';
import {Link} from 'react-router-dom';

const ArticleThumb = (props) => {

  const {title, media, summary, id} = props.articleThumb;

  return (
    <div class-name="article-thumb">
      <Link to={'articles/' + id}
      className='headline'> {media}</Link>
      <h4>{title}</h4>
      <p>{summary}</p>
    </div>
  )

}

export default ArticleThumb;
