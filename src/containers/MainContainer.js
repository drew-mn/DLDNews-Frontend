import React, {Component} from 'react';
import Request from '../helpers/Request';
import ArticleList from '../components/ArticleList';
import Featured from '../components/featured/Featured';

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
      <>
        <Featured articles={this.state.articles}/>
        <ArticleList articles={this.state.articles}/>
      </>
    )
  }

}

export default MainContainer;
