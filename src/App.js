import React, { Component } from 'react';


class App extends Component {
 
  state = {
    count: 0
  }
 
  handleCounterUp = () => {
    const { store } = this.props
    store.dispatch({ type: 'INCREMENT' })
    this.setState({count: store.getState()})
  }

  handleCounterDown = () => {
    const { store } = this.props
    store.dispatch({ type: 'DECREMENT' })
    this.setState({count: store.getState()})
  }

  handleCounterCustom = () => {
    const { store } = this.props
    store.dispatch({ type: 'CUSTOM_NUMBER', payload: 5 })
    this.setState({count: store.getState()})
  }

 
  render() {
    return (
      <div>
        <p>Count = {this.state.count}</p>
        <button onClick={this.handleCounterUp}>Counter up</button>
        <button onClick={this.handleCounterDown}>Counter down</button>
        <button onClick={this.handleCounterCustom}>Another</button>

      </div>
      )
  }

}

export default App;
