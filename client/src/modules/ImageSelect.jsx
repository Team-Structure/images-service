import React from 'react';

class ImageSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <img className='thumbnailBox' onClick={this.props.changeViewer} src={this.props.img} />;
  }
}

export default ImageSelect;