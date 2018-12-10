import React from 'react';

const ArticleForm = (props) => {

  const categoryOptions = props.categories.map((category) => {
    return <option key={category.id} value={category._links.self.href}>{category.label}</option>
  })

  function handleSubmit (event){
    event.preventDefault();
    const article = {
      "title": event.target.title.value,
      "summary": event.target.summary.value,
      "fullText": event.target.fullText.value,
      "category": event.target.category.value,
      "author": event.target.author.value,
      "date": event.target.date.value,
      "media": event.target.media.value
    }
    props.handleArticlePost(article);
  }

  return (
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="Title" name="title"/>
    <input type="text" placeholder="Summary" name="summary"/>
    <input type="text" placeholder="Article Text" name="fullText"/>
    <select name="category">
      {categoryOptions}
    </select>
    <input type="text" placeholder="Author" name="author"/>
    <input type="date" placeholder="Date" name="date"/>
    <input type="text" placeholder="Media" name="media"/>
    <button type="submit">Save</button>
    </form>
  )
}
export default ArticleForm;
