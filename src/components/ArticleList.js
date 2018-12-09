import React from 'react';
import ArticleThumb from './ArticleThumb';

const ArticleList = (props) => {

// should definitely re-factor to have one loop instead of the following 5 variable definitions...
  const articles_politics = props.articles.filter(article => article.category.label === "Politics").map(article => {
    return (
      <li key={article.id} className="article-thumb">
        <ArticleThumb articleThumb={article}/>
      </li>
    )
  });

  const articles_science = props.articles.filter(article => article.category.label === "Science").map(article => {
    return (
      <li key={article.id} className="article-thumb">
        <ArticleThumb articleThumb={article}/>
      </li>
    )
  });

  const articles_tech = props.articles.filter(article => article.category.label === "Technology").map(article => {
    return (
      <li key={article.id} className="article-thumb">
        <ArticleThumb articleThumb={article}/>
      </li>
    )
  });

  const articles_business = props.articles.filter(article => article.category.label === "Business").map(article => {
    return (
      <li key={article.id} className="article-thumb">
        <ArticleThumb articleThumb={article}/>
      </li>
    )
  });

  const articles_human = props.articles.filter(article => article.category.label === "Human Interest").map(article => {
    return (
      <li key={article.id} className="article-thumb">
        <ArticleThumb articleThumb={article}/>
      </li>
    )
  });



  return (
    <div className="home-article-sections">
      <ul className="home-politics">
        {articles_politics}
      </ul>
      <ul className="home-science">
        {articles_science}
      </ul>
      <ul className="home-technology">
        {articles_tech}
      </ul>
      <ul className="home-business">
        {articles_business}
      </ul>
      <ul className="home-humaninterest">
        {articles_human}
      </ul>
    </div>
  )

}

export default ArticleList;
