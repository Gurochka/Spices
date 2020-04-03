import './Cart.scss'
import React from 'react'
import { Link } from 'react-router-dom'

import SVG from 'react-inlinesvg'
import CartList from 'App/components/Cart/CartList/CartList'
import Loader from 'App/components/UI/Loader/Loader'

class Cart extends React.Component {
  state = {
    spices: [],
    loading: true,
    cart: []
  }

  mergeSpicesInCart(){
    if (!this.state.spices.length || !this.state.cart.length) return;
    
    let cart = [...this.state.cart];
    cart.forEach(item => {
      Object.keys(item.spices).forEach(spice_id => {
        let spice = this.state.spices.find(spice => spice.id == spice_id)
        spice.amount = item.spices[spice_id]
        item.spices[spice_id] = spice;
      })
    })
    this.setState({cart, loading: false})
  }

  onRemoveCartItem = (item) => {
    this.setState({loading: true})
    fetch(`http://localhost:3000/cart/${item.id}`, { method: 'DELETE' })
      .then(res => this.setState({loading: false, cart: [...this.state.cart].filter(o => o.id != item.id)}))
  }

  componentDidMount(){
    fetch('http://localhost:3000/spices')
      .then(res => res.json())
      .then(res => this.setState({spices: res}, this.mergeSpicesInCart))

    fetch('http://localhost:3000/cart')
      .then(res => res.json())
      .then(res => this.setState({cart: res}, this.mergeSpicesInCart))
  }

  render(){
    return  (
      <div className="container page-cart">
        <h1 className="text-center my-5">
          <Link to="/"> <SVG className="back-btn" src="/src/public/images/share-solid.svg" /> back </Link>
          Your order
        </h1>
        <div className="relative">
          <Loader loading={this.state.loading} />
          <CartList loading={this.state.loading} cart={this.state.cart} onRemove={this.onRemoveCartItem}/>
        </div>
      </div>
    )
  }
}
export default Cart