import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';

import { TopBar } from '../TopBar/TopBar';

import { connect } from 'react-redux';
import { getViewportMode } from '../../../redux/viewportRedux';

import styles from './Header.module.scss';

const Component = ({ className, mobile }) => {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className={clsx(className, styles.root)}>
      <TopBar />
      <AppBar position="static">
        <Toolbar className={styles.toolbar}>

          <Button color="inherit" className={styles.title} href="/">
            <h1>Decu shop</h1>
          </Button>

          {mobile ?
          <Button onClick={handleClick}><MenuIcon/></Button>
          : ''
          }

          <div className={`${mobile ? styles.mobile : styles.menu} ${open ? styles.open : ''}`}>
            <Button color="inherit" href="/">Home</Button>
            <Button color="inherit" href="#">Categories</Button>
            <Button color="inherit" href="#">About</Button>
            <Button color="inherit" href="#contact">Contact</Button>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
};


Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  mobile: PropTypes.bool,
};

const mapStateToProps = state => ({
  mobile: getViewportMode(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  // Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
