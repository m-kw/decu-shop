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
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import { AmountWidget } from '../../common/AmountWidget/AmountWidget';

import { connect } from 'react-redux';
import { getCart, changeAmount, addNotes, removeProduct, loadCartRequest, saveCartRequest, getTotalPrice, getTotalAmount } from '../../../redux/cartRedux.js';

import styles from './Cart.module.scss';

class Component extends React.Component {

  state = {
    opened: false,
  }

  static propTypes = {
    className: PropTypes.string,
    cart: PropTypes.object,
    changeAmount: PropTypes.func,
    addNotes: PropTypes.func,
    removeProduct: PropTypes.func,
    loadCart: PropTypes.func,
    saveCart: PropTypes.func,
    total: PropTypes.number,
    amount: PropTypes.number,
  };

  componentDidMount() {
    this.props.loadCart();
  }

  // shouldComponentUpdate(prevState) {
  //   console.log('prevState', prevState);
  //   return prevState.cart !== this.props.cart;
  // }

  componentDidUpdate() {
    this.props.saveCart(this.props.cart);
  }

  toggleCart() {
    const { opened } = this.state;

    opened ? this.setState({ opened: false }) : this.setState({ opened: true });
  }

  render() {
    const { className, cart, changeAmount, addNotes, removeProduct, total, amount } = this.props;
    const { opened } = this.state;

    return (
      <div className={clsx(className, styles.root)}>
        <div className={styles.cart}>
          <Button onClick={() => this.toggleCart()}>
            <ShoppingBasketIcon size="large" />
            <div className={styles.cartContent}>
              <span>{cart.products.length ? `$ ${total} (${parseInt(amount)})` : '0 (0)'}</span>
            </div>
          </Button>
        </div>

        {opened ?
          <Container className={styles.tableWrapper}>
            <h2 className={styles.title}>Your cart</h2>
            <TableContainer component={Paper} className={styles.tableContainer}>

              {cart.products.length ?
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
                          <Button color="secondary" variant="outlined" className={styles.delete} onClick={() => removeProduct(el)}><DeleteIcon /></Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                :
                <div className={styles.emptyCart}>
                  <span>Your cart is empty</span>
                </div>
              }
            </TableContainer>
            <Button color="primary" variant="contained" href="/orderSummary">Show my order</Button>
          </Container>
          : null
        }
      </div>
    );
  }
};

const mapStateToProps = state => ({
  cart: getCart(state),
  total: getTotalPrice(state),
  amount: getTotalAmount(state),
});

const mapDispatchToProps = dispatch => ({
  changeAmount: (id, amount) => dispatch(changeAmount(id, amount)),
  addNotes: (id, notes) => dispatch(addNotes(id, notes)),
  removeProduct: (product) => dispatch(removeProduct(product)),
  loadCart: () => dispatch(loadCartRequest()),
  saveCart: data => dispatch(saveCartRequest(data)),
});

const CartContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Cart,
  CartContainer as Cart,
  Component as CartComponent,
};
