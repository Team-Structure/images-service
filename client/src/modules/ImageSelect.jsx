import React from 'react';
import PropTypes from 'prop-types';

function ImageSelect(props) {
  const { changeViewer, img } = props;
  return (
    <button id="imageSelect" onClick={changeViewer} onKeyDown={changeViewer} type="button">
      <img className="thumbnailBox" src={img} alt="?" />
    </button>
  );
}

ImageSelect.propTypes = {
  changeViewer: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
};

export default ImageSelect;
