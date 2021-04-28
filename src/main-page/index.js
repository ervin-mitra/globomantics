import React, { Component } from 'react';
import logo from './logo.svg';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';

class App extends Component {
  state = {}

  componentDidMount() {
    this.fetchHouses();
  }

  fetchHouses = () => {
    fetch('/houses.json')
      .then(rsp => rsp.json())
      .then(allHouses => {
        this.allHouses = allHouses;
        this.determineFeaturedHouse();
        this.determineUniquePlanets();
      })
  }

  determineFeaturedHouse = () => {
    if(this.allHouses) {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length)
      const featuredHouse = this.allHouses[randomIndex];
      this.setState({ featuredHouse });
    }
  }

  determineUniquePlanets = () => {
    const planets = this.allHouses
      ? Array.from(new Set(this.allHouses.map(h => h.planet)))
      : [];
    planets.unshift(null); // add null to the beginning of an array, so that the first choice is blank
    this.setState({ planets });
  }

  render() {
    return (
      <div className="container">
        <Header subtitle="Providing Houses All Over The Milky Way"/>
        <FeaturedHouse house={this.state.featuredHouse} />
      </div>
    );
  }
}

export default App;

//---------STATE------------------------------------------------------------
// class component supports state and lifecycle methods
// as a rule of thumb:
// if you want to just render some JSX, then use function components
// use class components for everything else 
// State -> private data for the component, pass props, NOT state.
// Calling setState() triggers re-render
// State is used in render(), if you arent going to render it, then dont 
// use state.
//--------------------------------------------------------------------------
//-----------Lifecycle Methods----------------------------------------------
// Called by react when a lifecycle status of a component changes.
//--------------------------------------------------------------------------

/**
 * React keyboard shortcuts on VSC
 * 'imrc' import React , Component statement
 * 'cc + TAB' creates the class componenet template(scaffold)
 */