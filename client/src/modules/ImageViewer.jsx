import React from 'react';
import PropTypes from 'prop-types';

function ImageViewer(props) {
  const { image } = props;
  return <img id="viewerBox" src={image} alt="?" />;
}

ImageViewer.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ImageViewer;
