import React, { Component } from 'react';
import { Route } from 'react-router';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Home}></Route>
      </div>
    )
  }
}

export default App;
