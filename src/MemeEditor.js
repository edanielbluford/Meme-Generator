import React, { Component } from 'react';
import ImageCarousel from './ImageCarousel';
import ImageDisplay from './ImageDisplay';
import TextInput from './TextInput';
import couragewolf from './MemeImages/couragewolf.jpg'
import Leo from './MemeImages/Leo Meme.jpg'
import Picard from './MemeImages/Picard Facepalm.jpg'
import { combinator } from 'postcss-selector-parser';

class MemeEditor extends Component {
    constructor() {
        super()
        this.state = {
        imagebucket: [couragewolf, Leo, Picard],
        selectedImage: couragewolf,
        topText: '',
        bottomText: ''
        }
    }
    setTopText = (e) => {
        const newValue = e.target.value;
        this.setState({topText: newValue})
    }
    setBottomText = (e) => {
        const newValue = e.target.value;
        this.setState({bottomText:newValue})
    }
    clickImage = (e) => {
        console.log('image clicked!')
        const imageId = e.target.id;
        console.log(imageId)
        const selectedImage = this.state.imagebucket[imageId];
        console.log(selectedImage)
        this.setState({selectedImage: selectedImage})
    }
    render() {
        const {imagebucket, topText, bottomText, selectedImage} = this.state;
        return (
            <main>
      <ImageCarousel
        imagebucket={imagebucket}
        clickImage={this.clickImage}
        />
      <ImageDisplay
        topText={topText}
        bottomText={bottomText}
        selectedImage={selectedImage}
      />
      <TextInput
        topText={topText}
        bottomText={bottomText}
        setTopText={this.setTopText}
        setBottomText={this.setBottomText}      
      />
      </main>
        );
    }
}

export default MemeEditor;