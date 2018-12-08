import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header/Header';
import Navbar from './components/header/Navbar';
import MainContainer from './containers/MainContainer';
import ArticleFormContainer from './containers/ArticleFormContainer';
import FullArticleContainer from './containers/FullArticleContainer';


class App extends Component {
  render() {
    return (
      <div className='app' style={{background: 'white'}}>
      <Router>
        <>
          <Header/>
          <Navbar/>

          <Switch>
            <Route exact path="/articles" component={MainContainer} />
            <Route exact path="/articles/new" component={ArticleFormContainer} />
            <Route exact path="/articles/:id" render={ (props) => {
              const id = props.match.params.id;
              return <FullArticleContainer id={id}/>
            }} />
          </Switch>

        </>
      </Router>
      </div>
    )
  }
}

export default App;
