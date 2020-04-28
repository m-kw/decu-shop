import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

// import { connect } from 'react-redux';
// import { getRequest } from '../../../redux/cartRedux';


import styles from './ProductsSummary.module.scss';

const Component = ({ className, cart }) => {

  return (
    <div className={clsx(className, styles.root)}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.products.map(el => (
            <TableRow key={el._id}>
              <TableCell className={styles.productDetails}>
                <span className={styles.productTitle}>{el.title}</span>
                <div className={styles.notes}>{el.notes ? el.notes : 'Not personalized'}</div>
              </TableCell>
              <TableCell>$ {el.price}</TableCell>
              <TableCell>{el.amount}</TableCell>
              <TableCell>$ {el.price * el.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );

};

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.object,
};

// const mapStateToProps = state => ({
//   request: getRequest(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps)(Component);

export {
  Component as ProductsSummary,
  // Container as ProductsSummary,
  Component as ProductsSummaryComponent,
};
