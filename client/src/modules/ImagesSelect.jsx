import React from 'react';
import styled from 'styled-components';
import ImageSelect from './ImageSelect';

const ISelect = styled.div`
  height: 400px;
  width: 60px;
  float: left;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  };
  position: relative;
  overflow: hidden;
`;

const IScroll = styled.div`
  height: 400px;
  width: 60px;
  overflow: hidden;
  position: relative;
`;

const UpButton = styled.button`
  height: 36px;
  width: 36px;
  z-index: 2;
  top: -18px;
  left: calc(50% - 18px);

  display: block;
  position: absolute;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24px;
  background-image: url(https://teamstructureshopping.s3.amazonaws.com/icons/upCar.png);

  border-radius: 50%;
  border: 1px solid #e4e4e4;
  box-shadow: 0 0 0 1px rgba(0,0,0,.04), 0 4px 8px 0 rgba(0,0,0,.2);
  opacity: .9;
`;

const DownButton = styled.button`
  height: 36px;
  width: 36px;
  z-index: 2;
  bottom: -18px;
  left: calc(50% - 18px);

  display: block;
  position: absolute;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24px;
  background-image: url(https://teamstructureshopping.s3.amazonaws.com/icons/downCar.png);

  border-radius: 50%;
  border: 1px solid #e4e4e4;
  box-shadow: 0 0 0 1px rgba(0,0,0,.04), 0 4px 8px 0 rgba(0,0,0,.2);
  opacity: .9;
`;

class ImagesSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      thumbnails, changeViewer, scrollTop, scroll,
    } = this.props;
    const totalHeight = thumbnails.length * 72 - 400;

    if (scrollTop === 0 && totalHeight < 0) {
      return (
        <ISelect id="imagesSelect">
          <IScroll id="imagesScroll">
            {thumbnails.map(
              (tn) => <ImageSelect key={tn} img={tn} changeViewer={changeViewer} />,
            )}
          </IScroll>
        </ISelect>
      );
    } else if (scrollTop === totalHeight) {
      return (
        <ISelect id="imagesSelect">
          <UpButton id="thumbnailsScrollUp" onClick={() => scroll(1)} />
          <IScroll id="imagesScroll">
            {thumbnails.map(
              (tn) => <ImageSelect key={tn} img={tn} changeViewer={changeViewer} />,
            )}
          </IScroll>
        </ISelect>
      );
    } else if (scrollTop === 0) {
      return (
        <ISelect id="imagesSelect">
          <IScroll id="imagesScroll">
            {thumbnails.map(
              (tn) => <ImageSelect key={tn} img={tn} changeViewer={changeViewer} />,
            )}
          </IScroll>
          <DownButton id="thumbnailsScrollDown" onClick={() => scroll(-1)} />
        </ISelect>
      );
    } else {
      return (
        <ISelect id="imagesSelect">
          <UpButton id="thumbnailsScrollUp" onClick={() => scroll(1)} />
          <IScroll id="imagesScroll">
            {thumbnails.map(
              (tn) => <ImageSelect key={tn} img={tn} changeViewer={changeViewer} />,
            )}
          </IScroll>
          <DownButton id="thumbnailsScrollDown" onClick={() => scroll(-1)} />
        </ISelect>
      );
    }
  }
}

export default ImagesSelect;
