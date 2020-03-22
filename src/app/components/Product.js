import React from 'react'
import './Product.scss'
import IconCheck from 'App/components/images/IconCheck.js'

export default function Product(props){
  const { item } = props;

  return  (
    <div className="product" onClick={() => props.onClick()}>
      {
        item.checked && (
          <div className="selected">
            <IconCheck />
          </div>
      )}
      <img src={item.src} />
      {item.title}
    </div>
  )
}