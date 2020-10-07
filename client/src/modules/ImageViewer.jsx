import React from 'react';

class ImageViewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <img id='viewerBox' src={this.props.image} />;
  }
}

export default ImageViewer;