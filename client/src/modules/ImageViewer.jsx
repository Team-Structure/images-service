import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const VBo = styled.img`
  width: 400px;
  height: 400px;
  float: left;
  padding: 10px;
`

function ImageViewer(props) {
  const { image } = props;
  return <VBo id="viewerBox" src={image} alt="?" />;
}

// ImageViewer.propTypes = {
//   image: PropTypes.string.isRequired,
// };

export default ImageViewer;
