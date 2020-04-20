import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Form, FormGroup, Label, Input } from 'reactstrap';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './BillingDetailsForm.module.scss';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <Form>
      <FormGroup>
        <Label for="first-name">First name</Label>
        <Input type="text" id="first-name" name="name" required />

        <Label for="last-name">Last name</Label>
        <Input type="text" id="last-name" name="name" required />
      </FormGroup>

      <FormGroup>
        <Label for="country">Country</Label>
        <Input type="text" id="country" name="country" required />
      </FormGroup>

      <FormGroup>
        <Label for="address">Address</Label>
        <Input type="text" id="address" name="address" placeholder="Street, house number" required />
      </FormGroup>

      <FormGroup>
        <Label for="city">City</Label>
        <Input type="text" id="city" name="city" required />

        <Label for="post-code">Post code</Label>
        <Input type="text" id="post-code" name="post-code" placeholder="00-000" required />
      </FormGroup>

      <FormGroup>
        <Label for="phone">Phone</Label>
        <Input type="text" id="phone" name="phone" />

        <Label for="email">E-mail</Label>
        <Input type="email" id="email" name="email" required />
      </FormGroup>
    </Form>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as BillingDetailsForm,
  // Container as BillingDetailsForm,
  Component as BillingDetailsFormComponent,
};
