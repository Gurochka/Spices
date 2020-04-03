import React from 'react'
import './CartList.scss'

export default function CartList(props){
  const {cart} = props

  let getWeight = spices => Math.round(Object.values(spices).reduce((acc, spice) => acc + spice.amount, 0)*100)/100

  let getPrice = spices => Math.round(Object.values(spices).reduce((acc, spice) => acc + spice.price, 0)*100)/100

  const totalWeight = Math.round(cart.reduce((acc, item) => acc + getWeight(item.spices), 0)*100)/100
  const totalPrice = Math.round(cart.reduce((acc, item) => acc + getPrice(item.spices), 0)*100)/100

  if (!cart.length){
    return <div>There are no any cart in a cart!</div>
  }

  return (
    <>
      { 
        cart.map((item, idx) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-header d-flex px-3">
              <span>#{idx + 1} <small className="text-gray-500 ml-3">weight: { getWeight(item.spices) } g</small> <span className="ml-3">{getPrice(item.spices)}$</span></span>
              <div>
                <button onClick={() => props.onRemove(item)}>Remove</button>
              </div>
            </div>
            <ul className="cart-body px-3 m-0">
              { Object.values(item.spices).map(spice => (
                <li key={spice.id}>
                  <span>{spice.title}   <small className="text-gray-500 ml-3">{spice.amount} g</small> <span className="ml-3">{spice.price}$</span></span>
                </li>
              ))}
            </ul>
          </div>
        ))
      }
      <div>Total amount: <small className="text-gray-500 ml-3">{totalWeight} g</small> <span className="ml-3">{totalPrice}$</span></div>
      <button>Proceed to check out</button>
    </>
  )
}