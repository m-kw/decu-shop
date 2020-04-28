import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

import { connect } from 'react-redux';
import { getTotalPrice } from '../../../redux/cartRedux.js';

import styles from './CostSummary.module.scss';

const Component = ({ className, cart, total }) => (
  <div className={clsx(className, styles.root)}>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>Subtotal</TableCell>
          <TableCell>$ {total}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Delivery</TableCell>
          <TableCell>$ 10</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={styles.total}>Total</TableCell>
          <TableCell className={styles.total}>$ {total + 10}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
);

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.object,
  total: PropTypes.number,
};

const mapStateToProps = state => ({
  total: getTotalPrice(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as CostSummary,
  Container as CostSummary,
  Component as CostSummaryComponent,
};
