import React from 'react';
import ImageSelect from './ImageSelect.jsx'

class ImagesSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollTop: 0,
    }
  }

  scroll(direction = 1) {
    if (typeof direction !== 'number') {
      direction = 1;
    }
    let totalHeight = this.props.thumbnails.length * 84 - 400;
    let currentTop = this.state.scrollTop;
    let newTop = currentTop + (Math.sign(direction) * 350);

    if (newTop >= 0 && newTop <= totalHeight) {
      this.setState({ scrollTop: newTop }, () => {
        document.getElementById('imagesScroll').scrollTo({
          top: this.state.scrollTop,
          left: 0,
          behavior: 'smooth'
        })
      })
    } else if (newTop < 0) {
      console.log(`can't scroll before first picture`)
    } else if (newTop > totalHeight) {
      console.log(`can't scroll past final picture`)
    }
  }

  render() {
    return <div id='imagesSelect'>
      {/* <button id='thumbnailsScrollUp' onClick={() => this.scroll(-1)}>UP</button> */}
      <div id='imagesScroll'>
        {this.props.thumbnails.map(
          (thumbnail, index) => { return <ImageSelect key={`tn${index}`} img={thumbnail} changeViewer={this.props.changeViewer} /> }
        )}
      </div>
      {/* <button id='thumbnailsScrollDown' onClick={() => this.scroll(1)}>DOWN</button> */}
    </div>;
  }
}

export default ImagesSelect;