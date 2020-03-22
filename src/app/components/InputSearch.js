import React from 'react'
import './InputSearch.scss'
import IconSearch from './images/IconSearch'

class InputSearch extends React.Component {
  onInputHandler = (e) => {
    if (this.props.onChange) this.props.onChange(e.target.value);
  }

  render(){
    return  (
      <div className="search-field">
        <input type="text" placeholder={this.props.placeholder} onChange={this.onInputHandler} />
        <IconSearch />
      </div>  
    )
  }
}
export default InputSearch