import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import { AmountWidget } from '../../common/AmountWidget/AmountWidget';

import { connect } from 'react-redux';
import { getCart, changeAmount, addNotes, removeProduct, saveCartRequest } from '../../../redux/cartRedux.js';

import styles from './Cart.module.scss';

const Component = ({ className, cart, changeAmount, addNotes, removeProduct, saveCart }) => {

  return (
    <div className={clsx(className, styles.root)}>
      <Container>
        <h2 className={styles.title}>Your cart</h2>
        <TableContainer component={Paper} className={styles.tableContainer}>
          <Table className={styles.table} aria-label="cart table">
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.products.map(el => (
                <TableRow key={el._id}>
                  <TableCell className={styles.notesWrapper}>
                    {el.title}
                    <textarea
                      value={el.notes}
                      placeholder="Personalize your product here"
                      onChange={e => addNotes({ id: el._id, notes: e.target.value })}
                      className={styles.notes}
                    >
                    </textarea>
                  </TableCell>
                  <TableCell align="center">$ {el.price}</TableCell>
                  <TableCell align="center">
                    <AmountWidget value={el.amount} onChange={e => changeAmount({ id: el._id, amount: parseInt(e.target.value) })} />
                  </TableCell>
                  <TableCell align="center">
                    $ {el.price * el.amount}
                    <Button color="secondary" variant="outlined" className={styles.delete} onClick={() => removeProduct({ id: el._id })}><DeleteIcon /></Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button color="primary" variant="contained" href="/orderSummary" onClick={() => saveCart(cart)}>Show my order</Button>
      </Container>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.object,
  changeAmount: PropTypes.func,
  addNotes: PropTypes.func,
  removeProduct: PropTypes.func,
  saveCart: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  changeAmount: (id, amount) => dispatch(changeAmount(id, amount)),
  addNotes: (id, notes) => dispatch(addNotes(id, notes)),
  removeProduct: (id) => dispatch(removeProduct(id)),
  saveCart: (cart) => dispatch(saveCartRequest(cart)),
});

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Cart,
  CartContainer as Cart,
  Component as CartComponent,
};
