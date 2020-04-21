import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './AmountWidget.module.scss';

const Component = ({ className, value, onChange }) => {

  return (
    <div className={clsx(className, styles.root)}>
      <input type="number" min="1" max="10" value={value} onChange={onChange}/>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
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
