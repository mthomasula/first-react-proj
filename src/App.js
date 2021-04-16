import React, { useState } from 'react';
import Form from  "./Components/Form";
import List from "./Components/List";
import "./App.css"

function App() {

  const [todos, setTodos] = useState([])

  const onSubmitTodo = (todoText) => {
    const todo = {
        id: Math.floor(Math.random() * 1000), //replace this with 3rd party random generator later
        text: todoText,
        completed:false
      }
      setTodos([...todos, todo])  
                                  
  }
  
  const deleteTodoHandler = (todo) => {
    const updatedTodos = todos.filter((item) => {
        return item.id !== todo.id
      })
      
      setTodos(updatedTodos);
  }

  return (
      <div className="App">
        <div className="ui container">
          <div className="title">
              <i className="clipboard outline icon"></i>
              To-Do List    
          </div>
          <div>
            <Form onSubmitTodo={onSubmitTodo} />
            <List todos={todos} 
                deleteTodoHandler={deleteTodoHandler}
            />
          </div> 
        </div>
      </div>
  );
}

export default App;
