import React from 'react';
import {Link} from 'react-router-dom';

const ArticleThumb = (props) => {

  const {title, media, summary, id} = props.articleThumb;

// assumes average adult reading speed is 250 words per minute
  function calcReadTime(){
    const text = props.articleThumb.fullText;
    const wordCount = text.split(' ').length;
    const readTime = wordCount / 250;
    return readTime;
  }

  return (
    <div>
      <Link to={'articles/' + id}
      className='headline'> {media}</Link>
      <h4>{title}</h4>
      <h5>{calcReadTime()} min read </h5>
      <p>{summary}</p>
    </div>
  )

}

export default ArticleThumb;
