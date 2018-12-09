import React, {Component} from 'react';
import Request from '../helpers/Request';
import FullArticle from '../components/FullArticle';

class FullArticleContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      article: null
    }
  }
  componentDidMount(){
    let request = new Request();
    const url = '/api/articles/' + this.props.id + '?projection=embedForArticle';
    request.get(url).then(data => {
      this.setState({article: data})
    })
  }

  render(){
    return (
      <>
        <FullArticle article={this.state.article}/>
      </>
    )
  }

}

export default FullArticleContainer;
