import React from 'react';
import ReactDOM from 'react-dom';
import ImagesSelect from './modules/ImagesSelect.jsx';
import ImageViewer from './modules/ImageViewer.jsx';

class ProductImagesService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productImages: ['https://teamstructureshopping.s3.amazonaws.com/id1/connect4_1.png', 'https://teamstructureshopping.s3.amazonaws.com/id1/connect4_2.png', 'https://teamstructureshopping.s3.amazonaws.com/id1/connect4_3.png', 'https://teamstructureshopping.s3.amazonaws.com/id1/connect4_4.png', 'https://teamstructureshopping.s3.amazonaws.com/id1/connect4_1.png', 'https://teamstructureshopping.s3.amazonaws.com/id1/connect4_2.png', 'https://teamstructureshopping.s3.amazonaws.com/id1/connect4_3.png', 'https://teamstructureshopping.s3.amazonaws.com/id1/connect4_4.png'],
      currentImage: 'https://teamstructureshopping.s3.amazonaws.com/id1/connect4_1.png',
    };
  }

  changeViewer(image) {
    this.setState({ currentImage: image.target.src })
  }

  componenentDidMount() {
  }



  render() {
    return (
      <div id='productImages'>
        <ImagesSelect thumbnails={this.state.productImages} changeViewer={this.changeViewer.bind(this)} />
        <ImageViewer image={this.state.currentImage} />
      </div>
    );
  }
}

ReactDOM.render(<ProductImagesService />, document.getElementById('productImagesService'));
