import { types } from './actions'


export default (state = [], action = {}) => {
    switch (action.type) {
        case types.ADD_TODO:
          return [
            ...state,
            {
              id: action.id,
              text: action.text,
              completed: false
            }
          ]
        case types.TOGGLE_TODO:
          return state.map(todo =>
            todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
          )
        default:
          return state
    }
}