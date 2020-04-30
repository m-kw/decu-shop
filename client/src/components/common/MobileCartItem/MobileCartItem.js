import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

import { AmountWidget } from '../AmountWidget/AmountWidget';

import { connect } from 'react-redux';
import { addNotes, changeAmount, removeProduct } from '../../../redux/cartRedux.js';

import styles from './MobileCartItem.module.scss';

const Component = ({ el, addNotes, changeAmount, removeProduct }) => {

  return (
    <div className={styles.root}>
      <h5>{el.title}</h5>
      <textarea
        value={el.notes}
        placeholder="Personalize your product here"
        onChange={e => addNotes({ id: el._id, notes: e.target.value })}
        className={styles.notes}
      >
      </textarea>
      <div className={styles.mobileActions}>
        <span>$ {el.price}</span>
        <AmountWidget value={el.amount} onChange={e => changeAmount({ id: el._id, amount: parseInt(e.target.value) })} />
        <span>total: $ {el.price * el.amount}</span>
        <Button color="secondary" variant="outlined" className={styles.delete} onClick={() => removeProduct(el)}><DeleteIcon /></Button>
      </div>
    </div>
  );
};

Component.propTypes = {
  el: PropTypes.object,
  addNotes: PropTypes.func,
  changeAmount: PropTypes.func,
  removeProduct: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapDispatchToProps = dispatch => ({
  changeAmount: (id, amount) => dispatch(changeAmount(id, amount)),
  addNotes: (id, notes) => dispatch(addNotes(id, notes)),
  removeProduct: (product) => dispatch(removeProduct(product)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  // Component as MobileCartItem,
  Container as MobileCartItem,
};
