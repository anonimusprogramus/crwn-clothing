import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 10
  const publishableKey = 'pk_test_VK8ZWqK5MxFsSOa9TP39A7Ea00EVQZIc0B'

  const onToken = token => {
    console.log(token)
    alert('Payment Successful')
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://upload.wikimedia.org/wikipedia/commons/2/25/Simple_gold_crown.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeButton
