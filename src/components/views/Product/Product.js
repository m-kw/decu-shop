import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import { AmountWidget } from '../../common/AmountWidget/AmountWidget';

import { connect } from 'react-redux';
import { getById } from '../../../redux/productsRedux';
import { addProduct } from '../../../redux/cartRedux';

import styles from './Product.module.scss';

const Component = ({ className, product, addProduct }) => {
  const { title, description, images, price } = product;

  const [value, setValue] = React.useState(1);

  const onChange = ({ target }) => {
    setValue(parseInt(target.value));
  };

  return (
    <div className={clsx(className, styles.root)}>
      <Container maxWidth="lg">
        <Card className={styles.card}>

          <h2 className={styles.title}>{title}</h2>
          <Divider variant="middle" />

          <CardContent className={styles.content}>
            <div className={styles.description}>{description}</div>
            <div className={styles.images}>
              {images.map(el => (
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
                <AmountWidget value={value} onChange={onChange} />
                <div className={styles.total}>$ {price * value}</div>
              </div>
              <Button className={styles.submit} color="primary" variant="contained" onClick={() => addProduct(product, value)}>Buy</Button>
            </div>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object,
  addProduct: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
  product: getById(state, props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  addProduct: (product, amount) => dispatch(addProduct({ product, amount })),
});

const ProductContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as Product,
  ProductContainer as Product,
  Component as ProductComponent,
};
