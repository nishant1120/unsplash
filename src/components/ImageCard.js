import React from 'react';

class ImageCard extends React.Component{
     constructor(props){
         super(props);
         this.state ={spans:0};

         this.imageRef = React.createRef();
     }

     componentDidMount(){
         ///console.log(this.imageRef);
         this.imageRef.current.addEventListener( 'load' , this.setSpans);
     }
    
    setSpans=()=>{
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10 + 1 );

        this.setState({spans});
     }
    render(){
        // var _userName = 'nishmt mishra'
        // localStorage.setItem(_userName , _userName);
        // const name = localStorage.getItem(_userName)
        // if(name=== )
        const {description , urls} =this.props.image
        return(
            <div style={{gridRowEnd: `span ${this.state.spans}`}}> 
                <img ref ={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;