import React from 'react'
import './Order.scss'
import InputNumber from 'App/components/InputNumber/InputNumber'

export default function Order(props){
  const items = props.data

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
      <button>Send to cart</button>
    </div>
  )
}