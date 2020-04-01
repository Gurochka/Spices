import React from 'react'
import { Link } from 'react-router-dom'
import CartList from 'App/components/CartList/CartList'

class Cart extends React.Component {
  state = {
    spices: [],
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
    this.setState({cart})   
  }

  onRemoveCartItem = (item) => {
    fetch(`http://localhost:3000/cart/${item.id}`, { method: 'DELETE' })
      .then(res => this.setState({cart: [...this.state.cart].filter(o => o.id != item.id)}))
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
      <div className="container">
        <Link to="/">back to mixer</Link>
        <h1 className="text-center">Your order</h1>
        <CartList cart={this.state.cart} onRemove={this.onRemoveCartItem}/>
      </div>
    )
  }
}
export default Cart