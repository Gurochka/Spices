import React from 'react'
import './Order.scss'
import InputNumber from 'App/components/InputNumber.js'

class Order extends React.Component {
  render(){
    const items = this.props.data;
    return  (
      <div className="order">
      {
        items.map(item => (
          <div key={item.id}>
            <InputNumber value={item.amount} onChange={(amount) => this.props.onChangeAmount(item, amount)} diff="5"/>
            <label>{item.title}</label> 
            <span className="color" style={{backgroundColor: item.color}}></span>            
          </div>
          ))
      }
      </div>
    )
  }
}
export default Order