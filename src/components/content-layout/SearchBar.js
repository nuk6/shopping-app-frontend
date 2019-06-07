import React from 'react';
require('./ContentLayout.css');
class SearchBar extends React.Component{
    render(){
        return(
            <div id='searchBarWrap'>
                <div id='searchBarId'>
                    <input id='searchInput' placeholder='Search...'/>
                    <div className='submitButtons'>
                        Go
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchBar;