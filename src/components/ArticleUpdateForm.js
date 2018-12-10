import React from 'react';

const ArticleUpdateForm = (props) => {
  if(!props.article) return null;

  function handleSubmit(event){
    event.preventDefault();
    const article = {
      "id": props.article.id,
      "title": event.target.title.value,
      "summary": event.target.summary.value,
      "fullText": event.target.fullText.value,
      "category": event.target.category.value,
      "author": event.target.author.value,
      "date": event.target.date.value,
      "media": event.target.media.value
    }
    props.handleArticleUpdate(article);
  }

  const categoryOptions = props.categories.map((category) => {
    return <option key={category.id} value={category._links.self.href}>{category.label}</option>
  })

  return (
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Title" name="title" defaultValue={props.article.title}/>
    <input type="text" placeholder="Summary" name="summary" defaultValue={props.article.summary}/>
    <input type="text" placeholder="Article Text" name="fullText" defaultValue={props.article.fullText}/>
    <select name="category">
      {categoryOptions}
    </select>
    <input type="text" placeholder="Author" name="author" defaultValue={props.article.author.name}/>
    <input type="date" placeholder="Date" name="date" defaultValue={props.article.date}/>
    <input type="text" placeholder="Media" name="media" defaultValue={props.article.media}/>
    <button type="submit">Save</button>
    </form>
  )
}

export default ArticleUpdateForm;
