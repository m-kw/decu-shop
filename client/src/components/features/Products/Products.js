import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Divider from '@material-ui/core/Divider';

import { ProductBox } from '../../common/ProductBox/ProductBox';

import { connect } from 'react-redux';
import { getAll, loadProductsRequest } from '../../../redux/productsRedux.js';

import styles from './Products.module.scss';

class Component extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    products: PropTypes.array,
    loadProducts: PropTypes.func,
  };

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {
    const { className, products } = this.props;

    return (
      <div className={clsx(className, styles.root)}>
        <h2 className={styles.title}>Our products</h2>
        <Divider />

        <div className={styles.productsWrapper}>
          {products.map(el => (
            <ProductBox key={el._id} {...el} className='col-lg-3 col-12' />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
});

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Products,
  ProductsContainer as Products,
  Component as ProductsComponent,
};
