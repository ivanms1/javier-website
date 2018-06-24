import React, { Component } from 'react';
import PageOne  from './components/PageOne';
import IntroBox from './components/IntroBox';
import Profile from './components/Profile';
import Trabajo from './components/Trabajo';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <PageOne/>
        <IntroBox/>
        <Profile/>
        <Trabajo/>
        <Footer/>
      </div>
    );
  }
}

export default App;
