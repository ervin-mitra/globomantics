import React, { Component } from 'react';
import logo from './logo.svg';
import './main-page.css';
import Header from './header';

class App extends Component {
  state = {}

  fetchHouses = () => {
    fetch('/houses.json')
      .then(rsp => rsp.json())
      .then(allHouses => {
        this.allHouses = allHouses;
        this.determineFeaturedHouse();
      })
  }

  determineFeaturedHouse = () => {
    if(this.allHouses) {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length)
      const featuredHouse = this.allHouses[randomIndex];
      this.setState({ featuredHouse });
    }
  }

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
// State -> private data for the component, pass props, NOT state.
// Calling setState() triggers re-render
// State is used in render(), if you arent going to render it, then dont 
// use state.