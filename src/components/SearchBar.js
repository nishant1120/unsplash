import React from 'react';

class SearchBar extends React.Component{
    state={ term:''};
    
    onFormSubmit=event=>{                   //when i get an input/event in the form
        event.preventDefault();
        this.props.onSubmit(this.state.term);   
    };
    render(){
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <h1>Type what you are looking for</h1>
                    <input 
                     type='text'                                                                //arrow function event become e
                     value={this.state.term}
                     onChange={e=>this.setState({term: e.target.value})}/>      
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;