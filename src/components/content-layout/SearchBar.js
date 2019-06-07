import React from 'react';
require('./ContentLayout.css');
class SearchBar extends React.Component{
    render(){
        return(
            <div id='searchBarWrap'>
                <div id='searchBarId'>
                    <input id='searchInput'/>
                    <div className='submitButtons'>
                        Search!
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;