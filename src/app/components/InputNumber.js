import React from 'react'
import './InputNumber.scss'
import IconMinus from 'App/components/images/IconMinus.js'
import IconPlus from 'App/components/images/IconPlus.js'

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
      <div className="input-number">
        <div onClick={() => this.onChangeAmount(-diff)}>
          <IconMinus />
        </div>
        <input value={this.props.value} onChange={this.onInputHandler} type="text"/>
        <div onClick={() => this.onChangeAmount(diff)}>
          <IconPlus />
        </div>
      </div>
    )
  }
}
export default Order