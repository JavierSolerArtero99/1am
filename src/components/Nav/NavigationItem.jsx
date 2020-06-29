import React from 'react';
import './../../assets/styles/components/Nav/NavigationItem.scss';

const NavigationItem = (props) => (
    <div class="carousel-item">
        <div class="carousel-item__details">
            <div>
                <p className="Section">{props.section}</p>
            </div>
        </div>
    </div>
)

export default NavigationItem;