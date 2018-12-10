import React from 'react';

const FullArticle = (props) => {
  if(!props.article){
    return null;
  }

  return (
    <div className="FullSingleArticle">
      <h1>{props.article.title}</h1>
      <img src='{props.article.media}' alt={props.article.title}/>
      <h4>{props.article.author.name}</h4>
      <p>{props.article.summary}</p>
      <p>{props.article.fullText}</p>

    </div>
  )

}

export default FullArticle;
