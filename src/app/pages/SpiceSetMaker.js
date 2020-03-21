import React from 'react'
import ProductList from 'App/components/ProductList'
import Slider from 'App/components/Slider'
import Order from 'App/components/Order'

class SpiceSetMaker extends React.Component {
  state = {
    spices: []
  }

  onChangeAmount = (item, amount) => {
    item.amount = amount;
    this.setState({
      spices: this.state.spices.slice()
    })
  }

  onPickSpice = (item) => {
    const selected = this.state.spices.filter(s => s.checked) || [];

    if (selected.length >= 10 && !item.checked) return;
    item.checked = !item.checked
    this.setState({
      spices: this.state.spices.slice()
    })
  }

  componentDidMount(){
    fetch('http://localhost:3000/spices')
      .then(res => res.json())
      .then(res => {
        [0,5,8,18,23].forEach(n => res[n].checked = true)
        this.setState({spices: res})
      })
  }

  render(){
    const selected = this.state.spices.filter(s => s.checked) || [];
    const weight = selected.reduce((acc, item) => (acc + item.amount), 0)

    return  (
      <div className="container">
        <h1 className="text-center"> Make your own spice set </h1>
        <h4 className="text-center text-gray-500">Pick up to 10 spices in one set</h4>
        <Slider data={ selected } />
        <p><b>Total weight of your set:</b> {weight} grams, {selected.length} picked {selected.length == 10 && '(maximum)'}</p>
        <Order data={ selected } onChangeAmount={this.onChangeAmount}/>

        <ProductList data={this.state.spices} onClick={this.onPickSpice}/>
      </div>
    )
  }
}
export default SpiceSetMaker