import React, {Component} from 'react';
import Request from '../helpers/Request';
import FullArticle from '../components/FullArticle';

class FullArticleContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      article: null
    }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleBookmark = this.handleBookmark.bind(this);
  }
  componentDidMount(){
    let request = new Request();
    const url = '/api/articles/' + this.props.id + '?projection=embedForArticle';
    request.get(url).then(data => {
      this.setState({article: data})
    })
  }

  handleDelete(id){
  const url = '/api/articles/' + id;
  let request = new Request()
  request.delete(url).then(() => {
    window.location = '/articles'
  })
}

  handleBookmark(article){
    const url = '/api/articles/' + article.id;
    let request = new Request();
    request.put(url, article).then(data => {
      window.location = '/articles'
    })
  }

  render(){
    return (
      <>
        <FullArticle article={this.state.article} handleBookmarkClick={this.handleBookmark} handleDelete={this.handleDelete}/>
      </>
    )
  }

}

export default FullArticleContainer;
