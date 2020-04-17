import React from 'react';
import { shallow } from 'enzyme';
import { ProductBoxComponent } from './ProductBox';

const mockProps = {
  title: 'test title',
  price: 5,
  images: ['abc.jpg'],
};

describe('Component ProductBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductBoxComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
