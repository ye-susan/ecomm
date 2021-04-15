import React from 'react';
import { connect } from 'react-redux';

import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';
import './checkout-item.styles.scss';

export const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='checkout item' src={imageUrl} />
      </div>

      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='quantity-arrow' onClick={() => removeItem(cartItem) }>&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='quantity-arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>&#10006;</div>

    </div>
  );
};

const mapDispatchToProps = dispatch => ({
   clearItem: item => dispatch(clearItemFromCart(item)),
   addItem: item => dispatch(addItem(item)),
   removeItem: item => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);