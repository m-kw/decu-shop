import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './TopBar.module.scss';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>

    <div className={styles.phone}>
      <p>+48 123 456 789</p>
    </div>

    <div className={styles.cart}>
      <Button>
        <ShoppingBasketIcon size="large" />
        <div className={styles.cartContent}>
          5
        </div>
      </Button>
    </div>
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
  Component as TopBar,
  // Container as TopBar,
  Component as TopBarComponent,
};