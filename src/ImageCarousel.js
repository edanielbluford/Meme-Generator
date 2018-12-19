import React, { Component } from 'react';
import './ImageCarousel.css'

class ImageCarousel extends Component {
    render() { 
        const {imagebucket, clickImage} = this.props
        const imagebucketlist = imagebucket.map((item, index) => <img key={index} id={index} src={item} alt={item} onClick={clickImage}/>)
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