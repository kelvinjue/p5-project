import React from 'react';
import './Image.css';

class Image extends React.Component {
  render() {
    return (
      <div className="item">
        <img src={this.props.pic} />
        <div>
            {this.props.caption}
        </div>
      </div>
    );
  } 
}

export default Image;