import React, { Component } from 'react';
import Slider from "react-slick";

import car103 from '../../resources/img/car103.jpg'
import car102 from '../../resources/img/car102.jpg'
import car101 from '../../resources/img/car101.jpg'
import car104 from '../../resources/img/car104.jpg'
import car105 from '../../resources/img/car105.jpg'
import car106 from '../../resources/img/car106.jpg'
import car7 from '../../resources/img/car7.jpg'

class Carosule extends Component {
    state={
        dote:false,
        infinite: true,
        autoplay: true,
        speed:500
    }

     items = [car101,car105, car106].map((item) => {


        return (
            <div key={item}>
                <div className="carrousel_image"
                     style={{
                        background:`url(${item}) `,
                        backgroundRepeat: 'no-repeat',
                        height: `${window.innerHeight}px`,

                        }}
                >

                </div>
            </div>
        );
    });

    render() {
        console.log(this.state);
        return (

                <div className="carrousel_wrapper"
                     style={{
            overflow: 'hidden',
            height: `${window.innerHeight}px`,
            width: '100vw'
            }}
                >
                    <Slider {...this.state}>
                        {this.items}
                    </Slider>

                </div>


                    );
    }
}

export default Carosule;
