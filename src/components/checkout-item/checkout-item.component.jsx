import React from 'react';

import './checkout-item.styles.scss';

export const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className='checkout-item'>
    <div className='image-container'>
      <img alt='checkout item' src={imageUrl} />
    </div>

    <span className='name'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>{price}</span>
    <div className='remove-button'>&#10006;</div>

  </div>
)

export default CheckoutItem;