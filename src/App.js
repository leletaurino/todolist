import React, { useRef } from 'react'; // useEffect, useState, 
import './App.css';
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons'

// const initTodos = [
//   {
//     name: 'Call my mum',
//     dueDate: new Date().toLocaleString(),
//     user_id: 1
//   },
//   {
//     name: 'Go to school',
//     dueDate: new Date().toLocaleString(),
//     user_id: 1
//   },
//   {
//     name: 'Do my homework',
//     dueDate: new Date().toLocaleString(),
//     user_id: 1
//   }
// ]

function App({addTodo, removeTodo, todos}) {


  // const [todos, setTodos] = useState([])
  // useEffect(() => {
  //   setTodos(initTodos);

  //   return () => {

  //   }
  
  // }, []);

  const todoEl = useRef('')

  const manageClick = (e) =>{
    e.preventDefault();
    let newValue = todoEl.current.value;
    if(newValue !== '' && checkTodos(newValue)) {
      addTodo(newValue)
    } else {
      alert('Please enter a correct value')
    }
  }

  const checkTodos = (val) => {

    for(let t in todos){
      if(todos[t].name === val){
        return false
      }
    }
    return true
  }

  return (
    <div className="App container-fluid">
      <div className='row d-flex justify-content-center'>
          <div className='col-md-6'>
          <h1> MY TODO</h1>

            <form>
              <div className='form-group'>
                <input ref={todoEl} className='form-field' name="todo" id="todo" />
                <button onClick={manageClick} className='m-1 btn btn-success'>ADD</button>
              </div>
            </form>
            <ul className="list-group list-group-flush">
              {todos.map(todo => 
              
              <li key={todo.name} className="list-group-item">
                {todo.name}
                <button onClick={() => removeTodo(todo.name)} className='btn btn-danger btn-sm'  style={{float: "right", cursor: "pointer"}}>DEL</button>
              </li>
              
              )}

            </ul>
          </div>
      </div>
    </div>
  );
}
const matchStateToProps = (state) => {
  return {todos: [...state]}
}
const mapDispatchToProps = (dispatch) =>{
  return {
    addTodo: name => dispatch(addTodo(name)),
    removeTodo: todo => dispatch(removeTodo(todo))
  }
}

const createConnector = connect(matchStateToProps, mapDispatchToProps);
export default createConnector(App);
