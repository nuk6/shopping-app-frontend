import React from 'react';
// import ConfirmationPage from './components/pages/ConfirmationPage';
import DisplayPage from './components/pages/DisplayPage';
require('./HomePage.css');
class HomePage extends React.Component{
    render(){
        return (
        <div id='homePageId'>
            <DisplayPage/>
        </div>);
    }
}

export default HomePage;
