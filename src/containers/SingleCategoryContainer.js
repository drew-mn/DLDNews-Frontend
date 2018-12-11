import React, {Component} from 'react';
import Request from '../helpers/Request';
import SingleCategory from '../components/SingleCategory';

class SingleCategoryContainer extends Component {
  constructor(props){
    super(props);
    this.state = {articles: []}
  }


  componentDidMount(){
    let request = new Request();
    const url = '/api/categories/' + this.props.id + '?projection=embedForCategory';
    request.get(url).then(data => {
      this.setState({articles: data.articles})
    })
  }


  componentDidUpdate(){
    let request = new Request();
    const url = '/api/categories/' + this.props.id + '?projection=embedForCategory';
    request.get(url).then(data => {
      if(this.state.articles.length !== data.articles.length){
        this.setState({articles: data.articles})
      }
    })
  }

  render(){
    return (
      <>
        <SingleCategory articles={this.state.articles}/>
      </>
    )
  }

}

export default SingleCategoryContainer;
