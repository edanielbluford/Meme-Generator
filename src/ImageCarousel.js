import React, { Component } from 'react';
import './ImageCarousel.css'

class ImageCarousel extends Component {
    render() { 
        const {imagebucket} = this.props
        const imagebucketlist = imagebucket.map(i => <img key={i} src={i} alt={i}/>)
        return (
            <div id = 'Carousel'>
        Image Carousel
        <div id = 'Images'>
        {imagebucketlist}
         </div>
      </div>
        );
    }
}

export default ImageCarousel;