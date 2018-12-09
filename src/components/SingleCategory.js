import React from 'react';
import ArticleThumb from './ArticleThumb.js';
import {Link} from 'react-router-dom';

const SingleCategory = (props) => {

  const {title, media, summary, category} = props.singleCategory;

  return (
    <div>
      <Link to={'articles/' + category}
      className='single-category'> {media}</Link>
      <h4>{title}</h4>
      <p>{summary}</p>
    </div>
  )

}

export default SingleCategory;
