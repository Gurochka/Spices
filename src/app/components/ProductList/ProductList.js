import React from 'react'
import Product from 'App/components/Product/Product'
import './ProductList.scss'

export default function ProductList(props){
  return  (
    <div className="product-list">
    { props.data.map(item => (
        <Product key={item.id} item={item} onClick={() => props.onClick(item)}/>
      ))
    }
    </div>
  )
}