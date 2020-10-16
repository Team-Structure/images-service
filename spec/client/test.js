import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductImagesService from '../../client/src/modules/app';

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
