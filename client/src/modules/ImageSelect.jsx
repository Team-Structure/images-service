import React from 'react';
import styled from 'styled-components';

const ThumbBox = styled.img`
  border: solid 1px rgb(227, 226, 226);
  height: 52px;
  width: 52px;
  border-radius: 5px;
  font-size: auto;
  margin: auto;
  padding: 3px;
`;

const ThumbButton = styled.button`
  border: none;
  background: white;

  padding 6px 0;
  width: 60px;
  height: 60px;
`;

function ImageSelect(props) {
  const { changeViewer, img } = props;
  return (
    <ThumbButton id="imageSelect" onClick={changeViewer} onKeyDown={changeViewer} type="button">
      <ThumbBox className="thumbnailBox" src={img} alt="?" />
    </ThumbButton>
  );
}

export default ImageSelect;
