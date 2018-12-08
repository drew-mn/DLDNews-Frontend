import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/header/Navbar';
import Featured from './components/featured/Featured';


class App extends Component {
  render() {
    return (
      <div className='app' style={{background: 'white'}}>
        <>
          <Header/>
          <Navbar/>
          <Featured/>
        </>
      </div>
    )
  }
}

export default App;
