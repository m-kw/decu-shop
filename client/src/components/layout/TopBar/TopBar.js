import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Cart } from '../../features/Cart/Cart';

// import { connect } from 'react-redux';
// import { getCart, loadCartRequest } from '../../../redux/cartRedux.js';

import styles from './TopBar.module.scss';

const Component = ({ className }) => {

  return (
    <div className={clsx(className, styles.root)}>

      <div className={styles.phone}>
        <p>+48 123 456 789</p>
      </div>

      <Cart />
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   cart: getCart(state),
// });

// const mapDispatchToProps = dispatch => ({
//   loadCart: (cart) => dispatch(loadCartRequest(cart)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as TopBar,
  // Container as TopBar,
  Component as TopBarComponent,
};
