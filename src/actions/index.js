export const addTodo = (name) => {

    const newTodo = {name: name, user_id: 1, dueDate: new Date().toLocaleString()};
    //setTodos([newTodo, ...todos]);

    // nel dispatch passiamo come argomento un solo oggetto 
    // che rappresenta il parametro action dello store
    //dispatch({type: 'ADD_TODO', payload: newTodo})
    return {type: 'ADD_TODO', payload: newTodo}

}

export const removeTodo = (name) => {

    const delTodo = {name: name, user_id: 1, dueDate: new Date().toLocaleString()};
    return {type: 'DEL_TODO', payload: delTodo}
    
}