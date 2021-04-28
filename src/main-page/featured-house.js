import React from 'react';
import House from '../house';

// non class components must have props passed as an arg.
const FeaturedHouse = (props) => {
    if (props.house) return (
        <div>
            <div className="row featuedHouse">
                <h3 className="col-md-12 text-center">
                    Featured House
                </h3>
            </div>
            <House house={props.house} />
        </div>
    )
    return (<div>No Featured House </div>)
}

export default FeaturedHouse;