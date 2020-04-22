import React from 'react';
import { shallow } from 'enzyme';
import { ProductComponent } from './Product';

const mockProps = {
  product: {
    id: '1',
    title: 'test title',
    price: 10,
    description: 'test description',
    images: ['abc.jpg'],
  },
  request: {
    pending: false,
    error: null,
    success: null,
  },
};

describe('Component Product', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
