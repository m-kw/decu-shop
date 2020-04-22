import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Alert, Progress } from 'reactstrap';

import { AmountWidget } from '../../common/AmountWidget/AmountWidget';

import { connect } from 'react-redux';
import { getAll, getRequest, loadProductsRequest } from '../../../redux/productsRedux';
import { addProduct } from '../../../redux/cartRedux';

import styles from './Product.module.scss';

class Component extends React.Component {

  state = {
    value: 1,
  }

  static propTypes = {
    className: PropTypes.string,
    addProduct: PropTypes.func,
    products: PropTypes.array,
    request: PropTypes.object,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
    loadProducts: PropTypes.func,
  };

  onChange = ({ target }) => {
    this.setState({ ...this.state, value: parseInt(target.value) });
  };

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { className, products, addProduct, request, match } = this.props;
    const { value } = this.state;

    if (request.pending) return <Progress animated color="primary" value={50} />;
    else if (request.error) return <Alert color="warning">{request.error}</Alert>;
    else if (!request.success || !products.length) return <Alert color="info">No concerts</Alert>;
    else if (request.success)

      return (
        <div className={clsx(className, styles.root)}>
          {products.filter(el => el._id === match.params.id).map(product => (
            <Container maxWidth="lg" key={product._id}>
              <Card className={styles.card}>

                <h2 className={styles.title}>{product.title}</h2>
                <Divider variant="middle" />

                <CardContent className={styles.content}>
                  <div className={styles.description}>{product.description}</div>
                  <div className={styles.images}>
                    {product.images.map(el => (
                      <CardMedia
                        key={el}
                        component="img"
                        alt="decu box"
                        image={el}
                        className={styles.image}
                      />
                    ))}
                  </div>
                  <div className={styles.action}>
                    <div className={styles.amount}>
                      <AmountWidget value={this.state.value} onChange={e => this.onChange(e)} />
                      <div className={styles.total}>$ {product.price * value}</div>
                    </div>
                    <Button className={styles.submit} color="primary" variant="contained" onClick={() => addProduct(product, value)}>Buy</Button>
                  </div>
                </CardContent>
              </Card>
            </Container>
          ))}
        </div>
      );
  }
}

const mapStateToProps = state => ({
  products: getAll(state),
  request: getRequest(state),
});

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product, amount) => dispatch(addProduct({ product, amount })),
  loadProducts: () => dispatch(loadProductsRequest()),
});

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Product,
  ProductContainer as Product,
  Component as ProductComponent,
};
