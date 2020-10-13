import React from 'react';
import ReactDom from 'react-dom';
import { shallow, mount, configure } from 'enzyme';
import request from 'supertest';
import ProductImagesService from '../../client/src/modules/app'

const Adapter = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

describe('Server Tests', () => {
  it('should render without crashing', () => {
    shallow(<ProductImagesService productId={1} />);
  });

  it('should have correct state', () => {
    const wrapper = shallow(<ProductImagesService productId={6} />);
    wrapper.update();
    expect(wrapper.state('productId')).toEqual(6);
  });

});
