import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CheckoutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.styles.scss'

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors'
import StripeButton from '../../components/stripe-button/stripe-button.component'

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>

    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className='total'>
      <span>TOTAL: ${total}</span>
    </div>
    <div className='test-warning'>
      * Please use the following test credit card: *
      <br />
      #: 4242 4242 4242 4242
      <br />
      exp: 01/2020
      <br />
      CVV: 123
    </div>
    <StripeButton price={total} />
  </div>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)