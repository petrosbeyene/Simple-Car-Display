import React from "react";
import Carousel from "react-elastic-carousel";

import DatePicker from "./DatePicker";

const Car = (props) => {
    return(
        <div>
            <Carousel>
                {props.images.map(imageUrl => <div>
                    <img src={imageUrl} width={600} height={400}/>
                    </div>)
                }
            </Carousel>
            <p>{props.detail}</p>
            <div style={{display: 'flex',}}>
                <div>
                    <div>
                        <h2>Car Price:</h2>
                        <p>{props.price} Birr</p>
                    </div>
                    <div>
                        <h2>Features of the car:</h2>
                        <ul>
                            {props.features.map(feature => <li>{feature}</li>)}
                        </ul>
                    </div>
                    <div>
                        <h2>includedInThePrice</h2>
                        <ul>
                            {props.includedInPrice.map(price_tag => <li>{price_tag}</li>)}
                        </ul>
                    </div>
                </div>
                <div style={{padding: '10px'}}>
                    <h2>Pick a Date:</h2>
                    <DatePicker/>
                </div>
            </div>
            <hr/>
        </div>
        
    )
}

export default Car