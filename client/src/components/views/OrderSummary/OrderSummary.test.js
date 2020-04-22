import React from 'react';
import { shallow } from 'enzyme';
import { OrderSummaryComponent } from './OrderSummary';

const mockProps = {
  cart: {
    products: [
      { id: '1', title: 'test title', price: 2, amount: 1 },
    ],
  },
};

describe('Component OrderSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<OrderSummaryComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
