import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Button from '@material-ui/core/Button';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { Cart } from '../../features/Cart/Cart';

import { connect } from 'react-redux';
import { getCart, loadCartRequest } from '../../../redux/cartRedux.js';

import styles from './TopBar.module.scss';

class Component extends React.Component {

  state = {
    isCart: false,
  };

  static propTypes = {
    className: PropTypes.string,
    cart: PropTypes.object,
    loadCart: PropTypes.func,
  };

  componentDidMount() {
    const { loadCart } = this.props;
    loadCart();
  }

  toggleCart() {
    const { isCart } = this.state;
    return isCart ? this.setState({ isCart: false }) : this.setState({ isCart: true });
  }

  render() {
    const { className, cart } = this.props;

    return (
      <div className={clsx(className, styles.root)}>

        <div className={styles.phone}>
          <p>+48 123 456 789</p>
        </div>

        <div className={styles.cart}>
          <Button onClick={() => this.toggleCart()}>
            <ShoppingBasketIcon size="large" />
            <div className={styles.cartContent}>
              <span>{`$ ${cart.total} (${parseInt(cart.amount)})`}</span>
            </div>
          </Button>
        </div>

        {this.state.isCart ? <Cart /> : ''}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  loadCart: (cart) => dispatch(loadCartRequest(cart)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as TopBar,
  Container as TopBar,
  Component as TopBarComponent,
};
