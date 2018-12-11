import React from 'react';

const ArticleForm = (props) => {

  const categoryOptions = props.categories.map((category) => {
    return <option key={category.id} value={category._links.self.href}>{category.label}</option>
  })

  const authorOptions = props.authors.map((author) => {
    return <option key={author.id} value={author._links.self.href}>{author.name}</option>
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
    // debugger;
    props.handleArticlePost(article);
  }

  return (
    <form onSubmit={handleSubmit} className="form">
    <input type="text" placeholder="Title" name="title" className="title" />

    <input type="text" placeholder="Summary" name="summary" className="summary" />

    <input type="text" placeholder="Article Text" name="fullText" className="full-text"/>

    <select name="category" className="category" >
      {categoryOptions}
    </select>

    <select name="author" className="author" >
      {authorOptions}
    </select>
    <input type="date" placeholder="Date" name="date" className="date" />

    <input type="text" placeholder="Media" name="media" className="media" />
    
    <button type="submit">Save</button>
    </form>
  )
}
export default ArticleForm;
