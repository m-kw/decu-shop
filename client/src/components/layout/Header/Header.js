import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import { TopBar } from '../TopBar/TopBar';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Header.module.scss';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <TopBar />
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>

        <Button color="inherit" className={styles.title} href="/">
          <h1>Decu shop</h1>
        </Button>

        <div className={styles.menu}>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="#">Categories</Button>
          <Button color="inherit" href="#">About</Button>
          <Button color="inherit" href="#contact">Contact</Button>
        </div>

      </Toolbar>
    </AppBar>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};