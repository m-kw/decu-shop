import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { Form, FormGroup, Input } from 'reactstrap';
import Button from '@material-ui/core/Button';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import PlaceIcon from '@material-ui/icons/Place';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Contact.module.scss';

const Component = ({ className, children }) => (
  <div className={clsx(className, styles.root)} id='contact'>
    <Container>
      <h2 className={styles.title}>Contact</h2>
      <Divider />
      <div className={styles.contact}>
        <div className={styles.contactForm}>
          <Form>
            <FormGroup>
              <Input type="text" name="name" id="name" placeholder="Your name" required />
            </FormGroup>

            <FormGroup>
              <Input type="email" name="email" id="email" placeholder="Your e-mail" required />
            </FormGroup>

            <FormGroup>
              <Input type="text" name="message" id="message" min-length="20" placeholder="Write your message here" required />
            </FormGroup>

            <Button type="submit" color="primary" variant="contained">Send message</Button>
          </Form>
        </div>
        <div className={styles.contactDetails}>

          <PlaceIcon />
          <div className={styles.address}>
            <p>555 Fake Address</p>
            <p>View, San Antonio</p>
            <p>California, USA</p>
          </div>

          <PhoneIcon />
          <p>+48 124 456 789</p>

          <EmailIcon />
          <p>info@decushop.com</p>
        </div>
      </div>
    </Container>

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
  Component as Contact,
  // Container as Contact,
  Component as ContactComponent,
};
