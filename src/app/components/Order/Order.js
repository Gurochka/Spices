import React from 'react'
import './Order.scss'
import InputNumber from 'App/components/InputNumber/InputNumber'

export default function Order(props){
  const items = props.data
  const weight = items.reduce((acc, item) => (acc + item.amount), 0)  
  const total = Math.round(items.reduce((acc, item) => (acc + item.price), 0)*100)/100

  return  items.length > 0 && (
    <div className="my-3">
      <div className="order">
      {
        items.map(item => (
          <div key={item.id}>
            <InputNumber value={item.amount} onChange={(amount) => props.onChangeAmount(item, amount)} diff="5" />
            <label>{item.title}</label>
            <span className="color" style={{backgroundColor: item.color}}></span>
          </div>
          ))
      }
      </div>
      <p><b>Total weight of your set:</b> {weight} grams, {items.length} picked {items.length == props.max && '(maximum)'}</p>
      <p><b>Total amount:</b> {total} $</p>      
      <button onClick={props.onCreate}>Send to cart</button>
    </div>
  )
}