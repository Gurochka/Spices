import React from 'react'
import ProductList from 'App/components/Product/ProductList/ProductList'
import Slider from 'App/components/UI/Slider/Slider'
import Order from 'App/components/Order/Order'
import HeaderCart from 'App/components/Cart/HeaderCart/HeaderCart'
import InputSearch from 'App/components/UI/InputSearch/InputSearch'

class SpiceSetMaker extends React.Component {
  state = {
    spices: [],
    cart: [],
    search: ''
  }

  maximumSpices = 15

  componentDidMount(){
    
    fetch('http://localhost:3000/spices')
      .then(res => res.json())
      .then(res => {
        [0,5,8,18,23].forEach(n => res[n].checked = true)
        this.setState({spices: res})
      })

    fetch('http://localhost:3000/cart')
      .then(res => res.json())
      .then(res => {
        this.setState({ cart: res})
      })  
  }
  
  onChangeAmount = (item, amount) => {
    item.amount = amount;
    this.setState({
      spices: this.state.spices.slice()
    })
  }

  onPickSpice = (item) => {
    const selected = this.state.spices.filter(s => s.checked) || [];

    if (selected.length >= this.maximumSpices && !item.checked) return;
    item.checked = !item.checked
    this.setState({
      spices: this.state.spices.slice()
    })
  }

  onSearchHandler = (value) => {
    this.setState({search: value})
  }

  onCreate = () => {
    const spices = {}

    this.state.spices.forEach(s => {
      if(s.checked){
        spices[s.id] = s.amount
      }
    })

    fetch('http://localhost:3000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        spices: spices
      })
    }).then(res => {
      let spices = [...this.state.spices]
      spices.forEach(s => s.checked = false)
      let cart = [...this.state.cart, res]
      this.setState({ spices, cart })
    })
  }

  render(){
    const filtered = this.state.spices.filter(s => !this.state.search || s.title.search(this.state.search) != -1)
    const selected = this.state.spices.filter(s => s.checked) || [];

    return  (
      <div className="container relative">
        <HeaderCart total={this.state.cart.length}/>
        <h1 className="text-center"> Make your own spice set </h1>
        <h4 className="text-center text-gray-500">Pick up to 10 spices in one set</h4>
        <Slider data={ selected } />
        
        <Order data={ selected } onChangeAmount={this.onChangeAmount} max={this.maximumSpices} onCreate={this.onCreate}/>
       
        <InputSearch placeholder="Search through spices" onChange={this.onSearchHandler} />

        <ProductList data={filtered} onClick={this.onPickSpice}/>
      </div>
    )
  }
}
export default SpiceSetMaker