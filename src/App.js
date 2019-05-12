import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './Home';
import Squad from './components/squad/Squad';
import Prefcards from './components/prefcards/Prefcards';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/squad-armory' component={Squad}></Route>
        <Route exact path='/prefcards' component={Prefcards}></Route>
      </div>
    )
  }
}

export default App;
