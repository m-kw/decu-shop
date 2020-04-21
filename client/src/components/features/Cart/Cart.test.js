import React from 'react';
import { shallow } from 'enzyme';
import { CartComponent } from './Cart';

const mockProps = {
  cart: {
    products: [
      { id: '1', title: 'test title', price: 1, amount: 1 },
    ],
    amount: 1,
  },
};

describe('Component Cart', () => {
  it('should render without crashing', () => {
    const component = shallow(<CartComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
