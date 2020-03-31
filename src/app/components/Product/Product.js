import React from 'react'
import './Product.scss'
import SVG from 'react-inlinesvg'

export default function Product(props){
  const { item } = props;

  return  (
    <div className="product" onClick={() => props.onClick()}>
      {
        item.checked && (
          <div className="selected">
            <SVG src="/src/public/images/check-double-solid.svg" />
          </div>
      )}
      <img src={item.src} />
      {item.title}
    </div>
  )
}