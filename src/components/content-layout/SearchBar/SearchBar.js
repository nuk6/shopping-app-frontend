import React from 'react';
require('../ContentLayout.css');
class SearchBar extends React.Component{
    state = {
        listCollapsed : true
    }
    render(){
        return(
            <div id='searchBarWrap'>
                <div id='searchBarId'>
                    <div>
                    <input id='searchInput' placeholder='Search...'/>
                    <input id='searchInput' placeholder='Search...'/>
                    </div>
                    <div className='submitButtons'>
                        Go
                    </div>
                </div>
                <div id='searchBarListId'>
                    
                </div>
            </div>
        );
    }
}

export default SearchBar;