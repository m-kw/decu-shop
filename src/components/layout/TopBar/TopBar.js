import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/cartRedux.js';

import styles from './TopBar.module.scss';

const Component = ({ className, cart }) => {
  console.log('cart', cart);

  return (
    <div className={clsx(className, styles.root)}>

      <div className={styles.phone}>
        <p>+48 123 456 789</p>
      </div>

      <div className={styles.cart}>
        <Button>
          <ShoppingBasketIcon size="large" />
          <div className={styles.cartContent}>
            <span>{parseInt(cart.amount)}</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.object,
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as TopBar,
  Container as TopBar,
  Component as TopBarComponent,
};
