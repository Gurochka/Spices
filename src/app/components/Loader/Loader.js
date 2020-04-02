import React from 'react'
import './Loader.scss'
import SVG from 'react-inlinesvg'

export default function Loader(props){
  if (props.loading && props.loading === true){
    return (
      <div className="loader-blocker">
        <div className="loader"> 
          <SVG src="/src/public/images/spinner-solid.svg" />
        </div>
      </div>
    )
  }
  return null
}