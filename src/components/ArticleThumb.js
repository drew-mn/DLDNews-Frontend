import React from 'react';
import {Link} form 'react-router-dom';

const ArticleThumb = (props) => {

  const {title, media, summary} = props.articleThumb;

  return (
    <div>
      <Link to={'articles/' + id}
      className='headline'> {media}</Link>
      <h4>{title}</h4>
      <p>{summary}</p>
    </div>
  )

}
