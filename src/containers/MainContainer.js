import React, {Component} from 'react';
import Request from '../helpers/Request';
import ArticleList from '../components/ArticleList';

class MainContainer extends Component {
  constructor(props){
    super(props);
    this.state = {articles: []}
  }

  componentDidMount(){
    let request = new Request();
    request.get('/api/articles').then(data => {
      this.setState({articles: data._embedded.articles})
    })
  }

  render(){
    return (
      <ArticleList articles={this.state.articles}/>
    )
  }

}

export default MainContainer;
