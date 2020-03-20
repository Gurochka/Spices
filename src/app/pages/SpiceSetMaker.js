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

    if (selected.length >= 10) return;
    item.checked = !item.checked
    this.setState({
      spices: this.state.spices.slice()
    })
  }

  componentDidMount(){
    fetch('http://localhost:3000/spices')
      .then(res => res.json())
      .then(res => {
        res[0].checked=true;
        res[5].checked=true;
        res[8].checked=true;
        res[18].checked=true;
        res[23].checked=true;
        this.setState({spices: res})
      })
  }

  render(){
    const selected = this.state.spices.filter(s => s.checked) || [];

    return  (
      <div className="container">
        <h1>Make your own spice set</h1>
        <h2>up to 10 spices</h2>
        <h4>Already picked:</h4>
        <Slider data={ selected } />
        <Order data={ selected } onChangeAmount={this.onChangeAmount}/>

        <ProductList data={this.state.spices} onClick={this.onPickSpice}/>
      </div>
    )
  }
}
export default SpiceSetMaker