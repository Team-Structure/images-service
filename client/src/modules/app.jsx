import React from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';
import ImagesSelect from './ImagesSelect';
import ImageViewer from './ImageViewer';

class ProductImagesService extends React.Component {
  constructor(props) {
    super(props);
    const { match } = this.props;
    this.state = {
      productId: match.params.id,
      productImages: [],
      currentImage: null,
    };

    this.changeViewer = this.changeViewer.bind(this);
  }

  componentDidMount() {
    const { productId } = this.state;
    console.log(productId)
    $.ajax({
      url: 'http://localhost:3003/api/productImages',
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

// ImagesSelect.propTypes = {
//   productId: PropTypes.number.isRequired,
// };

export default ProductImagesService;
