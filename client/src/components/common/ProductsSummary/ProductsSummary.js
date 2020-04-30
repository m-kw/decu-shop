import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

import { connect } from 'react-redux';
import { getViewportMode } from '../../../redux/viewportRedux';

import styles from './ProductsSummary.module.scss';

const Component = ({ className, cart, mobile }) => {

  const [id, setId] = React.useState('1');
  const [open, setOpen] = React.useState(false);

  const handleClick = (id) => {
    setId(id);
    setOpen(!open);
  };


  return (
    <div className={clsx(className, styles.root)}>

      {mobile ?
        <List component="nav">
          {cart.products.map(el => (
            <div key={el._id}>
              <ListItem button onClick={() => handleClick(el._id)}>
                <ListItemText primary={el.title} secondary={`$ ${el.price} * ${el.amount} = $ ${el.price * el.amount}`} />
                {el.id ? <ExpandLess /> : <ExpandMore />}
              </ListItem>

              {el.notes && el._id === id ?
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button>
                      <ListItemText primary={'Your message'} secondary={el.notes || 'Not personalized'} />
                    </ListItem>
                  </List>
                </Collapse>
                : ''
              }

            </div>
          ))}
        </List>
        :
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.products.map(el => (
              <TableRow key={el._id}>
                <TableCell className={styles.productDetails}>
                  <span className={styles.productTitle}>{el.title}</span>
                  <div className={styles.notes}>{el.notes ? el.notes : 'Not personalized'}</div>
                </TableCell>
                <TableCell>$ {el.price}</TableCell>
                <TableCell>{el.amount}</TableCell>
                <TableCell>$ {el.price * el.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      }


    </div>
  );

};

Component.propTypes = {
  className: PropTypes.string,
  cart: PropTypes.object,
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
  // Component as ProductsSummary,
  Container as ProductsSummary,
  Component as ProductsSummaryComponent,
};
