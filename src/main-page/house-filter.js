import React, { Component } from 'react';

class HousFilter extends Component {
    state = {}

    onSearchChange = (e) => {
        const planet = e.target.value;
    }

    render() { 
        const search = this.state.search;
        const planets = this.props.planets || [];

        return (  
            <div className="form-group row mt-3">
                <div className="offset-md-2 col-md-4">
                    Search for your dream house by planet:
                </div>
                <div className="col-md-4">
                    <select className="form-control" value={search} onChange={this.onSearchChange}>
                        {planets.map(planet => <option key={planet} value={planet}>{planet}</option>)}
                    </select>
                </div>
            </div>
        );
    }
}
 
export default HousFilter;