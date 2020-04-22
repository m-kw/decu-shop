import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CostSummary.module.scss';

const Component = ({ className, cart }) => (
  <div className={clsx(className, styles.root)}>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Subtotal</TableCell>
          <TableCell>$ {cart.total}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Delivery</TableCell>
          <TableCell>$ {cart.delivery}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles.total}>Total</TableCell>
          <TableCell className={styles.total}>$ {cart.total + cart.delivery}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.object,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as CostSummary,
  // Container as CostSummary,
  Component as CostSummaryComponent,
};
