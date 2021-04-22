import React, { Component } from 'react';
import logo from './logo.svg';
import './main-page.css';
import Header from './header';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header subtitle="Providing Houses All Over The Milky Way"/>
      </div>
    );
  }
}

export default App;

// class component supports state and lifecycle methods
// as a rule of thumb:
// if you want to just render some JSX, then use function components
// use class components for everything else 