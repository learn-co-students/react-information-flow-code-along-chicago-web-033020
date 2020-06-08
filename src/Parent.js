import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'
import Child from './Child'

class Parent extends Component {

  constructor() {
    super()
    this.state = {
      color: getRandomColor(),
      childrenColor: '#FFF'
    }
  }

  changeColor = (newChildColor) => {
    this.setState({
      color: getRandomColor(),
                              // need to pass this color to the other child,
      childrenColor: newChildColor // but cant pass data between siblings,
                          // so we store the color of the child in this parent component
                        // and have Parent do the passing, seen in lines 29 and 30
    })
  }

  //passing handleColorChange function as a PROP to child components

  render() {
    return (
      <div className="parent" style={{backgroundColor: this.state.color}}>
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor} />
        <Child color={this.state.childrenColor} handleColorChange={this.changeColor} />
      </div>
    ) // now, we go use this prop data (lines 29 & 30)
    // in our child component, to change the backgorund color
  }
}

export default Parent
