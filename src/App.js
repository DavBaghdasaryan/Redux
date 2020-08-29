import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as todoActions from './Store/Todo/actions' 


class App extends Component {
 
 

 
  render() {
    return (
      <div>
       

      </div>
      )
  }

}

const mapStateProps = state => {
  return {
    todo: state.todo
  }
}

const mapDispatchProps = dispatch => {
  return {
    addTodo: () => dispatch(todoActions.addTodo()),
    toggleTodo: () => dispatch(todoActions.toggleTodo())
  }
}



export default connect(mapStateProps, mapDispatchProps)(App);
