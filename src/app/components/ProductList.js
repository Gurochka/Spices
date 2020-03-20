import React from 'react'
import Product from 'App/components/Product'
import './ProductList.scss'

class ProductList extends React.Component {
  render(){
    return  (
      <div className="product-list">
      { this.props.data.map(item => (
          <Product key={item.id} item={item} onClick={() => this.props.onClick(item)}/>
        ))
      }
      </div>
    )
  }
}
export default ProductList