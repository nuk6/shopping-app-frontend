import React from 'react';
require('./Pages.css');
export default class DisplayPage extends React.Component{
    render(){
        return(
            <div id='ConfirmationPageId'>
                <div className='tickMarkCircle'>
                    <div className='tick'>
                    </div>
                </div>
                <div className='infoText'>
                    Congo!! Your order is on the way!!
                </div>
            </div>
        );
    }
}

