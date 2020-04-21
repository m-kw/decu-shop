import React from 'react';
import { shallow } from 'enzyme';
import { CostSummaryComponent } from './CostSummary';

const mockProps = {
  cart: {
    products: [
      { id: '1', title: 'test title', price: 1, notes: 'abc' },
    ],
    amount: 1,
    total: 100,
  },
};

describe('Component CostSummary', () => {
  it('should render without crashing', () => {
    const component = shallow(<CostSummaryComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
