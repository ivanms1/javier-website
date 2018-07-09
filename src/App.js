import React, { Component } from 'react';
import PageOne  from './components/PageOne';
import IntroBox from './components/IntroBox';
import Profile from './components/Profile';
import Trabajo from './components/Trabajo';
import Footer from './components/Footer';
import Contacto from './components/Contacto';
import M from 'materialize-css';

import './App.css';

class App extends Component {
  componentDidMount(){
    document.addEventListener('DOMContentLoaded', function() {
      let elems = document.querySelectorAll('.scrollspy');
      let options = {
        throttle: 10,
        scrollOffset: 100
      }
      M.ScrollSpy.init(elems, options);
    });
  }
  render() {
    return (
      <div>
        <PageOne/>
        <IntroBox/>
        <Profile/>
        <Trabajo/>
        <Contacto/>
        <Footer/>
      </div>
    );
  }
}

export default App;
