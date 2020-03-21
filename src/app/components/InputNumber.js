import React from 'react'
import './InputNumber.scss'

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
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
        </div>
        <input value={this.props.value} onChange={this.onInputHandler} type="text"/>
        <div onClick={() => this.onChangeAmount(diff)}>
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
        </div>
      </div>
    )
  }
}
export default Order