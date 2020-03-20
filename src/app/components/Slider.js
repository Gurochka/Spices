import React from 'react'
import './Slider.scss'

class Slider extends React.Component {
  render(){
    let data = this.props.data || [];
    let total = this.props.data.reduce((acc, item) => { 
      return acc + parseInt(item.amount, 10)
    }, 0)

    return  (
      <div className="coloured-slider">
        {
          data.map(item => (
            <span key={item.id} style={{backgroundColor: item.color, width: `${(item.amount)*100/total}%`}} title={item.title}>{item.title}</span>
            ))
        }
      </div>
    )
  }
}
export default Slider