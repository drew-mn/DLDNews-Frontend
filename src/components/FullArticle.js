import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const FullArticle = (props) => {
  if(!props.article){
    return null;
  }

  // function onSave(event){
  //   event.preventDefault();
  //   const article = {props.
  //
  //   }
  //   props.handleBookmark(props.article.id);
  // }

  return (
    <div className="FullSingleArticle">
      <h1>{props.article.title}</h1>
      <img src={props.article.media} alt={props.article.title}/>
      <h4>{props.article.author.name}</h4>
      {/* <button type="submit" onClick={onSave}>Bookmark for Later</button> */}
      <p>{props.article.summary}</p>
      <p>{props.article.fullText}</p>
      <Link to={'/articles/update/' + props.article.id}>
      <button>Edit Article</button>
      </Link>


    </div>
  )

}

export default FullArticle;
