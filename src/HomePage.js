import React from 'react';
import Banner from './components/Banner';
import Content from './components/Content';
import Slider from './components/Slider';
require('./HomePage.css');

export default class HomePage extends React.Component{

    render(){
        return(
            <div id='homePageId'>
                <Slider/>
                <Banner/>
                <Content/>
            </div>
        );
    }
}