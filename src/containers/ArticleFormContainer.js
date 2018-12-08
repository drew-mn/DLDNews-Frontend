import React, {Component} from 'react';
import Request from '../helpers/Request';
import ArticleForm from '../components/ArticleForm';

class ArticleFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      categories: []
    }

  }

  componentDidMount(){
    const request = new Request();
    request.get('/api/categories').then(data => {
      this.setState({categories: data._embedded.categories});
    })
  }

  handleArticlePost(article){
    const request = new Request();
    request.post('/api/articles', article).then(() => {
      window.location = '/articles';
    })
  }

  render(){
    return (
      <ArticleForm categories={this.state.categories} handleArticlePost={this.handleArticlePost}/>
    )
  }

}

export default ArticleFormContainer;
