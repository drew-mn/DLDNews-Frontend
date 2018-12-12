import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const FullArticle = (props) => {
  if(!props.article){
    return null;
  }

  // pass in click event
  // change the one value to true from false
  // send that bit plus the rest of a full article back up to ArticleList? Somehwere
  // then give it to a put request, and have it updaet!

  // eventually will need to populate list of article thumbs where bookmarked = true

  function handleBookmark(){
  // event.preventDefault();
  const article = {
    "bookmarked": true
  }
  props.handleBookmarkClick(article);
  }

  function onDelete(){
    props.handleDelete(props.article.id)
  }

  return (
    <div className="FullSingleArticle">
      <h1>{props.article.title}</h1>
      <img src={props.article.media} alt={props.article.title}/>
      <h4>{props.article.author.name}</h4>
      <button type="button" onClick={handleBookmark}>Bookmark for Later</button>
      <p>{props.article.summary}</p>
      <p>{props.article.fullText}</p>
      <Link className = "edit-article" to={'/articles/update/' + props.article.id}>
      <button>EDIT ARTICLE</button>
      </Link>
      <button onClick={onDelete}>DELETE ARTICLE</button>
    </div>
  )

}

export default FullArticle;
