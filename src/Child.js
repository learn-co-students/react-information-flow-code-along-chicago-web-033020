import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  render() {
    return (
      <div onClick={() => this.props.handleColorChange(getRandomColor())} //calling handleColorChange from parent component
        className="child"
        style={{backgroundColor: this.props.color}}
      ></div>
    ) // style={{backgroundColor: "#FFF"}} ---- original line 9
    // change to the prop data we set in parent.
  // go change Child color from #FFF to newChildColor, to use as argument in changeColor
  }
}

export default Child
