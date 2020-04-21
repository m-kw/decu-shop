import React from 'react';
import { shallow } from 'enzyme';
import { BillingDetailsFormComponent } from './BillingDetailsForm';

const mockProps = {
  client: {
    firstName: 'John',
    lastName: 'Doe',
    address: 'Vanilla Street',
    postCode: '00-000',
    city: 'React',
    country: 'JavaScript',
    phone: '111111111',
    email: 'john@example.com',
  },
};

describe('Component BillingDetailsForm', () => {
  it('should render without crashing', () => {
    const component = shallow(<BillingDetailsFormComponent {...mockProps} />);
    expect(component).toBeTruthy();
  });
});
