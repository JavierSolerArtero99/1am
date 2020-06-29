import React from 'react';
import WhatIs1AM from '../components/MainSection/WhatIs1AM';
import NavigationContainer from '../components/Nav/NavigationContainer';
import NavigationItem from '../components/Nav/NavigationItem';

class MainSection extends React.Component {
    render() {
        return (
            <div>
                <WhatIs1AM />
                <NavigationContainer>
                    <NavigationItem section="shop"/>
                    <NavigationItem section="about"/>
                    <NavigationItem section="contact"/>
                    <NavigationItem section="gabi"/>
                </NavigationContainer>
            </div>
        );
    }
}

export default MainSection;