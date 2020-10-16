import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TBo = styled.img`
  border: solid 1px rgb(227, 226, 226);
  height: 60px;
  width: 60px;
  border-radius: 6px;
  font-size: auto;
  margin: 12px;
`

function ImageSelect(props) {
  const { changeViewer, img } = props;
  return (
    <button id="imageSelect" onClick={changeViewer} onKeyDown={changeViewer} type="button">
      <TBo className="thumbnailBox" src={img} alt="?" />
    </button>
  );
}

ImageSelect.propTypes = {
  changeViewer: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
};

export default ImageSelect;
