import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';

import { BillingDetailsForm } from '../../common/BillingDetailsForm/BillingDetailsForm';
import { ProductsSummary } from '../../common/ProductsSummary/ProductsSummary';
import { CostSummary } from '../../common/CostSummary/CostSummary';

import { connect } from 'react-redux';
import { getCart, sendOrderRequest, loadCartRequest, getTotalAmount, getTotalPrice } from '../../../redux/cartRedux.js';

import styles from './OrderSummary.module.scss';

class Component extends React.Component {

  state = {
    client: {
      firstName: '',
      lastName: '',
      address: '',
      postCode: '',
      city: '',
      country: '',
      phone: '',
      email: '',
    },
    error: null,
    open: true,
  };


  static propTypes = {
    className: PropTypes.string,
    cart: PropTypes.object,
    sendOrder: PropTypes.func,
    loadCart: PropTypes.func,
    total: PropTypes.number,
    amount: PropTypes.number,
    history: PropTypes.object,
  };

  componentDidMount() {
    this.props.loadCart();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      client: {
        ...this.state.client,
        [name]: value,
      },
    });
  };

  submitOrder = (e, cart, client) => {
    console.log('cart', cart);
    e.preventDefault();

    const { firstName, lastName, email, address, city, country, postCode } = client;
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    let error = null;

    if (!firstName || !lastName || !email || !address || !city || !country || !postCode) error = 'Provide all necessary details';
    else if (!validEmail.test(email)) error = 'Provide valid email';
    else if (!cart.products.length) error = 'Your cart is empty';

    if (!error) {
      const payload = {
        cart: {
          products: cart.products,
          amount: this.props.amount,
          total: this.props.total,
        },
        client: client,
      };

      this.props.sendOrder(payload);
      this.props.history.push('/');

    } else {
      this.setState({ error });
    }
  };

  closePopup = () => {
    this.setState({ ...this.state, error: null, open: false });
  }

  render() {
    const { className, cart } = this.props;
    const { client, error } = this.state;
    const { handleChange, closePopup } = this;

    return (
      <div className={clsx(className, styles.root)}>
        <h2 className={styles.title}>Your order summary</h2>
        <Container maxWidth="lg">
          <Paper className={styles.paper}>

            {error ?
              <div className={styles.errorMsg}>
                {error}
                <Button onClick={closePopup}>OK</Button>
              </div>
              : null
            }

            <Grid container spacing={1} justify="space-around">

              <Grid item xs={12} lg={6} className={styles.billing}>
                <Grid container direction="column" justify="center" alignItems="center">
                  <Grid item className={styles.gridItem}>
                    <Card elevation={3} className={clsx(styles.card, styles.billing)}>
                      <CardHeader title="Billing details" />
                      <BillingDetailsForm onChange={handleChange} client={client}>
                        <Button color="primary" variant="contained" onClick={e => this.submitOrder(e, cart, client)}>Order</Button>
                      </BillingDetailsForm>
                    </Card>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} lg={4} className={styles.summary}>
                <Grid container direction="column" justify="center" alignItems="stretch">

                  <Grid item className={styles.gridItem}>
                    <Card elevation={3} className={clsx(styles.card, styles.products)}>
                      <CardHeader title="Products" />
                      <ProductsSummary cart={cart} />
                    </Card>
                  </Grid>

                  <Grid item className={styles.gridItem}>
                    <Card elevation={3} className={clsx(styles.card, styles.total)}>
                      <CardHeader title="Cart total" />
                      <CostSummary cart={cart} />
                    </Card>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: getCart(state),
  total: getTotalPrice(state),
  amount: getTotalAmount(state),
});

const mapDispatchToProps = dispatch => ({
  sendOrder: (order) => dispatch(sendOrderRequest(order)),
  loadCart: () => dispatch(loadCartRequest()),
});

const OrderContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as OrderSummary,
  OrderContainer as OrderSummary,
  Component as OrderSummaryComponent,
};
