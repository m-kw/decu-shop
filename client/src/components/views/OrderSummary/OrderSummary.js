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
import { getCart, sendOrder } from '../../../redux/cartRedux.js';

import styles from './OrderSummary.module.scss';

const Component = ({ className, cart, sendOrder }) => {

  const [client, setClient] = React.useState({
    firstName: '',
    lastName: '',
    address: '',
    postCode: '',
    city: '',
    country: '',
    phone: '',
    email: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setClient({ ...client, [name]: value });
  };

  return (
    <div className={clsx(className, styles.root)}>
      <h2 className={styles.title}>Your order summary</h2>
      <Container maxWidth="lg">
        <Paper className={styles.paper}>
          <Grid container spacing={1} justify="space-around">

            <Grid item xs={12} lg={6}>
              <Grid container direction="column" justify="center" alignItems="center">
                <Grid item>
                  <Card elevation={3} className={clsx(styles.card, styles.billing)}>
                    <CardHeader title="Billing details" />
                    <BillingDetailsForm onChange={handleChange} client={client}>
                      <Button color="primary" variant="contained" onClick={() => sendOrder({ cart: cart, client: client})}>Order</Button>
                    </BillingDetailsForm>
                  </Card>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Grid container direction="column" justify="center" alignItems="stretch">

                <Grid item>
                  <Card elevation={3} className={clsx(styles.card, styles.products)}>
                    <CardHeader title="Products" />
                    <ProductsSummary cart={cart} />
                  </Card>
                </Grid>

                <Grid item>
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
};


Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.object,
  sendOrder: PropTypes.func,
};

const mapStateToProps = state => ({
  cart: getCart(state),
});

const mapDispatchToProps = dispatch => ({
  sendOrder: (cart, client) => dispatch(sendOrder(cart, client)),
});

const OrderContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as OrderSummary,
  OrderContainer as OrderSummary,
  Component as OrderSummaryComponent,
};
