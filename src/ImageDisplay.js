import React, { Component } from 'react';
import './ImageDisplay.css'

class ImageDisplay extends Component {
    render() {
        const {topText, bottomText, selectedImage} = this.props;
        return (
            <div id ='Display'>
             <p>{topText}</p>
            <img alt={selectedImage} src= {selectedImage}/>
             <p>{bottomText}</p>
         </div>
        );
    }
}

export default ImageDisplay;