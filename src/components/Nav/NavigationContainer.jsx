import React from 'react';
import './../../assets/styles/components/Nav/NavigationContainer.scss';

const NavigationContainer = ({ children }) => (
    <section class="carousel">
        <div class="carousel__container">
            {children}
        </div>
    </section>
)

export default NavigationContainer;