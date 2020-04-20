import React from 'react';
import { shallow } from 'enzyme';
import { ProductsSummaryComponent } from './ProductsSummary';

const mockProps = {
  cart: {
    products: [
      { id: '1', title: 'test title', price: 1, notes: 'abc' },
    ],
    amount: 1,
    total: 100,
  },
};

describe('Component ProductsSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductsSummaryComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
