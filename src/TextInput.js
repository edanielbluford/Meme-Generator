import React, { Component } from 'react';
import './TextInput.css'

class TextInput extends Component {
    
    render(){
        const {topText, bottomText, setTopText, setBottomText} = this.props; 
        return (
        <div id = 'TextDiv'>
            <div>Top Text
                <input type="text" value={topText} onChange={setTopText} />
            </div>
            <div>Bottom Text
                <input type='text' value={bottomText} onChange={setBottomText}/>

            </div>
      </div>
        );
    }
}

export default TextInput;
 