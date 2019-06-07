import React from 'react';
import SearchBar from '../content-layout/SearchBar';
import Header from '../content-layout/Header';
require('./Pages.css');
export default class DisplayPage extends React.Component{
    render(){
        return(
            <div id='DisplayPageId'>
                <Header/>
                <SearchBar/>
            </div>
        );
    }
}

