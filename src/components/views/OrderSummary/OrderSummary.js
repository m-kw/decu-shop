import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { BillingDetailsForm } from '../../common/BillingDetailsForm/BillingDetailsForm';
import { ProductsSummary } from '../../common/ProductsSummary/ProductsSummary';

import { connect } from 'react-redux';
import { getCart } from '../../../redux/cartRedux.js';

import styles from './OrderSummary.module.scss';

const Component = ({ className, cart }) => (
  <div className={clsx(className, styles.root)}>
    <h2 className={styles.title}>Your order summary</h2>
    <Container maxWidth="lg">
      <Paper className={styles.paper}>
        <Card elevation={3} className={styles.card}>
          <CardHeader title="Products" />
          <ProductsSummary cart={cart}/>
        </Card>

        <Card elevation={3} className={styles.card}>
          <CardHeader title="Cart total" />
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
        </Card>

        <Card elevation={3}>
          <BillingDetailsForm />
        </Card>
      </Paper>
    </Container>
  </div>
);

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

const OrderContainer = connect(mapStateToProps)(Component);

export {
  // Component as OrderSummary,
  OrderContainer as OrderSummary,
  Component as OrderSummaryComponent,
};
