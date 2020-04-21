import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Divider from '@material-ui/core/Divider';

import { ProductBox } from '../../common/ProductBox/ProductBox';

import { connect } from 'react-redux';
import { getAll } from '../../../redux/productsRedux.js';

import styles from './Products.module.scss';

const Component = ({ className, products }) => {

  return (
    <div className={clsx(className, styles.root)}>
      <h2 className={styles.title}>Our products</h2>
      <Divider />

      <div className={styles.productsWrapper}>
        {products.map(el => (
          <ProductBox key={el.id} {...el} className='col-lg-3 col-12' />
        ))}
      </div>
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
