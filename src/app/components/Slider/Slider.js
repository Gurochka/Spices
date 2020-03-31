import React from 'react'
import './Slider.scss'

class Slider extends React.Component {
  sliderContent = {}

  componentDidUpdate(prevProps) {
    if (prevProps.data != this.props.data){
      Object.keys(this.sliderContent).forEach(id => {
        let el = this.sliderContent[id];
        if (el && (el.offsetHeight < el.scrollHeight || el.offsetWidth < el.scrollWidth)){
          el.innerHTML = '';
        }
      })
    }
  }

  render(){
    let total = this.props.data.reduce((acc, item) => { 
      return acc + parseInt(item.amount, 10)
    }, 0)

    let items = this.props.data.map(item => {
      let percent = Math.round((item.amount*100*10)/total) / 10;
      let styles = {
        backgroundColor: item.color,
        width: `${percent}%`
      }
      return (
        <span 
          key={item.id} 
          style={styles} 
          title={`${item.title}, ${percent}%`} 
          ref={ref => this.sliderContent[item.id] = ref}>
            {item.title}
        </span>
        )
    })

    return  items.length > 0 && (
      <div className="coloured-slider d-flex">
        { items }
      </div>
    )
  }
}
export default Slider