import React from 'react';
require('../ContentLayout.css');
class SearchBar extends React.Component{
    state = {
        listCollapsed : true
    }

    handleChange = (e) => {
        if(e.target.value.length >= 3){
            this.setState({listCollapsed : false});
        } else {
            this.setState({listCollapsed : true});
        }
    }
    handleBlur = (e) => {
        this.setState({listCollapsed : true});
    }
    

    render(){
        let res = [];
        if(!this.state.listCollapsed){
            for(let i = 0; i < 13; ++i){
                res.push(
                    <div className='searchItem' key='i' >
                        <div id='searchItemResId' className='searchIt searchItemRes'></div>
                    </div>
                );
            }
        }
        return(
            <div id='searchBarBody'>
               <div id='searchBarWrap'>
                    <div className='searchItem'>
                        <input id='id0' placeholder='Search...' spellCheck='false' className='searchIt searchItInput' type='text'onChange={this.handleChange} onBlur={this.handleBlur}/>
                        <div className='searchButton'>Search</div>
                    </div>
                    {res}
               </div>
            </div>
        );
    }
}

export default SearchBar;