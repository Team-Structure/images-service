import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import ImagesSelect from './modules/ImagesSelect';
import ImageViewer from './modules/ImageViewer';

class ProductImagesService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: 36,
      productImages: [],
      currentImage: null,
    };

    this.changeViewer = this.changeViewer.bind(this);
  }

  componentDidMount() {
    const { productId } = this.state;
    $.ajax({
      url: '/api/productImages',
      data: { productId },
      success: (results) => {
        this.setState({
          productImages: results.map((result) => result.s3_url),
          currentImage: results[0].s3_url,
        });
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  changeViewer(image) {
    this.setState({ currentImage: image.target.src });
  }

  render() {
    const { productImages, currentImage } = this.state;
    return (
      <div id="productImages">
        <ImagesSelect thumbnails={productImages} changeViewer={this.changeViewer} />
        <ImageViewer image={currentImage} />
      </div>
    );
  }
}

ReactDOM.render(<ProductImagesService />, document.getElementById('productImagesService'));
