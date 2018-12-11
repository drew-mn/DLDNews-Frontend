import React from 'react';
import {Link} from 'react-router-dom';

const ArticleThumb = (props) => {

  const {title, media, summary, readCounter, id} = props.articleThumb;

// assumes average adult reading speed is 250 words per minute
  function calcReadTime(){
    const text = props.articleThumb.fullText;
    const wordCount = text.split(' ').length;
    const readTime = Math.ceil(wordCount / 250);
    return readTime;
  }

  function addReadCounter(){
      readCounter += 1;
      props.handleReadCounterAdd(props.articleThumb)
    }

// must send a put request every time this thumbnail link is clicked. The put request will simply add 1 to the readCounter.
// How the hell can we do it?




  return (
    <div class-name="article-thumb">
      <Link to={'articles/' + id}
      className='headline'><img src={media} alt={title} onClick={addReadCounter}/></Link>
      <h4>{title}</h4>
      <p>{summary}</p>
      <h5>{calcReadTime()} min read </h5>
    </div>
  )

}

export default ArticleThumb;
