import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './BillingDetailsForm.module.scss';

const Component = ({ className, children, client, onChange }) => {
  const { firstName, lastName, address, postCode, city, country, phone, email } = client;

  return (
    <div className={clsx(className, styles.root)}>
      <Form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="first-name">First name</Label>
              <Input type="text" id="first-name" name="firstName" value={firstName} onChange={onChange} required />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="last-name">Last name</Label>
              <Input type="text" id="last-name" name="lastName" value={lastName} onChange={onChange} required />
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="address">Address</Label>
          <Input type="text" id="address" name="address" placeholder="Street, house number" value={address} onChange={onChange} required />
        </FormGroup>

        <Row form>
          <Col md={2}>
            <FormGroup>
              <Label for="post-code">Post code</Label>
              <Input type="text" id="post-code" name="postCode" placeholder="00-000" value={postCode} onChange={onChange} required />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for="city">City</Label>
              <Input type="text" id="city" name="city" value={city} onChange={onChange}  required />
            </FormGroup>
          </Col>
          <Col md={5}>
            <FormGroup>
              <Label for="country">Country</Label>
              <Input type="text" id="country" name="country" value={country} onChange={onChange} required />
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="phone">Phone</Label>
              <Input type="text" id="phone" name="phone" value={phone} onChange={onChange} />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input type="email" id="email" name="email" value={email} onChange={onChange} required />
            </FormGroup>
          </Col>
        </Row>
        {children}
      </Form>
    </div>
  );
};


Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  client: PropTypes.object,
  onChange: PropTypes.func,
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
