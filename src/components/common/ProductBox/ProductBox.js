import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

// import { connect } from 'react-redux';
// import { addProduct } from '../../../redux/cartRedux.js';

import styles from './ProductBox.module.scss';

const Component = ({ className, id, title, images, price }) => {

  return (
    <div className={clsx(className, styles.root)}>
      <Card className={styles.card}>
        <div>
          <img src={images[0]} alt='ooops' className={styles.image} />
        </div>

        <div className={styles.actionArea}>
          <CardContent className={styles.content}>
            <div className={styles.title}>
              {title}
            </div>

            <div className={styles.price}>
              $ {price}
            </div>
          </CardContent>

          <CardActions className={styles.actions}>
            <Button href={`/products/${id}`} color="primary" variant="contained">More</Button>
            {/* <Button color="primary" variant="contained"><ShoppingBasketIcon /></Button> */}
          </CardActions>
        </div>
      </Card>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  title: PropTypes.string,
  images: PropTypes.array,
  price: PropTypes.number,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   addProduct: (product, amount) => dispatch(addProduct(product, amount)),
// });

// const Container = connect(null, mapDispatchToProps)(Component);

export {
  Component as ProductBox,
  // Container as ProductBox,
  Component as ProductBoxComponent,
};
