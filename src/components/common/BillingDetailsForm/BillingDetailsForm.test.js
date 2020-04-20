import React from 'react';
import { shallow } from 'enzyme';
import { BillingDetailsFormComponent } from './BillingDetailsForm';

describe('Component BillingDetailsForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<BillingDetailsFormComponent />);
    expect(component).toBeTruthy();
  });
});
