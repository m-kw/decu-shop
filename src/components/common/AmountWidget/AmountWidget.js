import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './AmountWidget.module.scss';

const Component = ({ className, value, onAdd, onRemove, onChange}) => {

  return (
    <div className={clsx(className, styles.root)}>
      <Button color="secondary" variant="contained" size="small" onClick={onAdd}><AddIcon /></Button>
      <input type="number" min="1" max="10" value={value} onChange={onChange}/>
      <Button color="secondary" variant="contained" size="small" onClick={onRemove}><RemoveIcon /></Button>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
  onChange: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as AmountWidget,
  // Container as AmountWidget,
  Component as AmountWidgetComponent,
};
