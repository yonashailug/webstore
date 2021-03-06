import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { checkout } from '../actions'
import { getTotal, getCartProducts } from '../store/reducers'
import Cart from '../components/Cart'
import { useNavigate } from 'react-router-dom'

const CartContainer = ({ products, total, checkout }) => {

  const navigate = useNavigate()
  const handleRedirect = () => {
    navigate('/store/products')
  }

  return (
    <Cart
      products={products}
      total={total}
      onCheckoutClicked={() => checkout(products)}
      redirect={() => handleRedirect()}
     />
  )
}

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkout }
)(CartContainer)
