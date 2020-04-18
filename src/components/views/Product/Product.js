import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { connect } from 'react-redux';
import { getById } from '../../../redux/productsRedux.js';

import styles from './Product.module.scss';

const Component = ({ className, product }) => {
  const { id, title, description, images, price } = product;

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
                <Button color="secondary" variant="contained" size="small"><AddIcon /></Button>
                <input type="number" />
                <Button color="secondary" variant="contained" size="small"><RemoveIcon /></Button>
              </div>
              <Button className={styles.submit} color="primary" variant="contained" type="submit">Buy</Button>
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
};

const mapStateToProps = (state, props) => ({
  product: getById(state, props.match.params.id),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const ProductContainer = connect(mapStateToProps)(Component);

export {
  // Component as Product,
  ProductContainer as Product,
  Component as ProductComponent,
};
