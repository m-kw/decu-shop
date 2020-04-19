import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { Cart } from '../../features/Cart/Cart';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/cartRedux.js';

import styles from './TopBar.module.scss';

const Component = ({ className, cart }) => {

  const [isCart, setCart] = React.useState(false);

  const toggleCart = () => {
    return isCart ? setCart(false) : setCart(true);
  };

  return (
    <div className={clsx(className, styles.root)}>

      <div className={styles.phone}>
        <p>+48 123 456 789</p>
      </div>

      <div className={styles.cart}>
        <Button onClick={toggleCart}>
          <ShoppingBasketIcon size="large" />
          <div className={styles.cartContent}>
            <span>{parseInt(cart.amount)}</span>
          </div>
        </Button>
      </div>

      {isCart ? <Cart /> : ''}
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
