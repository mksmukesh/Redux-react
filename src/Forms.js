import React, { Component } from 'react'

export default class Forms extends Component {
    constructor()
    {
        super();
        this.state={
            data:10
        }
    }
  render() {
    console.warn(this.state)
    return (
      <div>
        <h1>
            Pure Component {this.state.data}
        </h1>
        
      </div>
    )
  }
}
