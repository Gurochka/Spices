import React from 'react'
import './InputSearch.scss'
import SVG from 'react-inlinesvg'

class InputSearch extends React.Component {
  onInputHandler = (e) => {
    if (this.props.onChange) this.props.onChange(e.target.value);
  }

  render(){
    return  (
      <div className="search-field d-flex my-2">
        <input type="text" placeholder={this.props.placeholder} onChange={this.onInputHandler} className="form-control"/>
        <SVG src="/src/public/images/search-solid.svg" />
      </div>  
    )
  }
}
export default InputSearch