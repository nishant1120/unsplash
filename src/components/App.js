import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component{

    state={images:[]};

    onSearchSubmit=async term=>{
        const response=await unsplash.   //async in front of method name and await in front of network request to implement promise
        get('/search/photos',{
            params: 
            {
                query: term
            },
            
            //use .then when working with async
        });
        this.setState({images: response.data.results});
    }
    render(){
    return (
        <div className='ui container' style={{marginTop:'10px'}}>

        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/> 
        </div>);
    }
}

export default App;