import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderCart.scss'
import SVG from 'react-inlinesvg'

export default (props) => {
  return  (
    <Link to="/cart" className="header-cart">
      <div className="badge">{props.total}</div>
      <SVG src="/src/public/images/shopping-basket-solid.svg" />
    </Link>
  )
}