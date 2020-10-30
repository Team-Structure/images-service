import React from 'react';
import styled from 'styled-components';

const ViewerBox = styled.img`
  width: 400px;
  height: 400px;
  float: left;
  padding: 10px;
  margin: auto;
`;

function ImageViewer(props) {
  const { image } = props;
  return <ViewerBox id="viewerBox" src={image} alt="?" />;
}

export default ImageViewer;
