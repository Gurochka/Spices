import React from 'react'
import './InputNumber.scss'
import SVG from 'react-inlinesvg'

class Order extends React.Component {
  onChangeAmount(diff){
    let new_value = (this.props.value + diff) || parseInt(this.props.diff || 1, 10)
    this.props.onChange(new_value);
  }

  onInputHandler = (e) => {
    let isNumberPattern = RegExp('^[0-9]{0,3}$').test(e.target.value);

    if (isNumberPattern){
      this.onChangeAmount(e.target.value - this.props.value)
    }
  }

  render(){
    const diff = parseInt(this.props.diff || 1, 10)
    return  (
      <div className="input-number d-flex">
        <div onClick={() => this.onChangeAmount(-diff)}>
          <SVG src="/src/public/images/minus-solid.svg" />
        </div>
        <input value={this.props.value} onChange={this.onInputHandler} type="text" className="form-control"/>
        <div onClick={() => this.onChangeAmount(diff)}>
          <SVG src="/src/public/images/plus-solid.svg" />
        </div>
      </div>
    )
  }
}
export default Order