import { createStore } from "redux";

const initTodos = [
    {
      name: 'Call my mum',
      dueDate: new Date().toLocaleString(),
      user_id: 1
    },
    {
      name: 'Go to school',
      dueDate: new Date().toLocaleString(),
      user_id: 1
    },
    {
      name: 'Do my homework',
      dueDate: new Date().toLocaleString(),
      user_id: 1
    }
  ]


const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [action.payload, ...state]
        case 'DEL_TODO':
            const newList = state.filter((item) => item.name !== action.payload.name);
            return newList

        default:
            return state
    }
}


export const store = createStore(reducer, initTodos, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__())