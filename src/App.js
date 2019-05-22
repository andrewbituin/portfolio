import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './components/home/Home';
import Squad from './components/squad/Squad';
import Prefcards from './components/prefcards/Prefcards';
import Learnjs from './components/learnjs/Learnjs';
import Petful from './components/petful/Petful';
import About from './components/about/About';
import Contact from './components/contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/squad-armory' component={Squad}></Route>
        <Route exact path='/prefcards' component={Prefcards}></Route>
        <Route exact path='/learnjs' component={Learnjs}></Route>
        <Route exact path='/petful' component={Petful}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
      </div>
    )
  }
}

export default App;
