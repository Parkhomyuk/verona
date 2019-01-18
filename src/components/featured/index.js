import React, { Component } from 'react';
import '../../resources/style.css'
import Carosule from './carosule'
import TimeUntil from './timeUntil'
class Featured extends Component {
    render() {
        return (
            <div className="main">
                <Carosule/>

                <div className="car_name">
                    <div className="wrapper">
                        Exclusive Cars
                    </div>

                </div>


                <TimeUntil/>
            </div>
        );
    }
}

export default Featured;
