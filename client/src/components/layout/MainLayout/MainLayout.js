import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Header } from '../Header/Header';
import { Footer } from '../../layout/Footer/Footer';
import { Contact } from '../../layout/Contact/Contact';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { changeViewport } from '../../../redux/viewportRedux.js';

import styles from './MainLayout.module.scss';

const isMobile = () => {
  const mobile = '(max-width: 576px)';

  if (window.matchMedia(`${mobile}`).matches) return true;
  else return false;
};

const Component = ({ className, children, changeViewport }) => {

  useEffect(() => {
    changeViewport(isMobile());
    window.addEventListener('resize', () => changeViewport(isMobile()));
  });

  return (
    <div className={clsx(className, styles.root)}>
      <Header />
      {children}
      <Contact />
      <Footer />
    </div>
  );
};


Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  changeViewport: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapDispatchToProps = dispatch => ({
  changeViewport: mode => dispatch(changeViewport(mode)),
});

const Container = connect(null, mapDispatchToProps)(Component);

export {
  // Component as MainLayout,
  Container as MainLayout,
  Component as MainLayoutComponent,
};
