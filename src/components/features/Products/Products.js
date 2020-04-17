import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { ProductBox } from '../../common/ProductBox/ProductBox';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux.js';

import styles from './Products.module.scss';

const Component = ({ className, products }) => {
  console.log('products', products);
  return (
    <div className={clsx(className, styles.root)}>
      <h2>Our products</h2>

      {products.map(el => (
        <ProductBox key={el.id} {...el} />
      ))}

    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  products: PropTypes.array,
};

const mapStateToProps = state => ({
  products: getAll(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ProductsContainer = connect(mapStateToProps)(Component);

export {
  // Component as Products,
  ProductsContainer as Products,
  Component as ProductsComponent,
};
