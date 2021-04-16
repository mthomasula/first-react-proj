import React from 'react';
import TodoItem from './TodoItem';

const List = (props) => {

    const renderedTodos = props.todos.map((todo, index)=> {
        return (
            <div key={index}>
                <TodoItem todo={todo} 
                deleteTodoHandler={props.deleteTodoHandler}
                />
            </div>
        )
    })

    return(
        <div className="ui relaxed divided list">{renderedTodos}</div>
    )
}

export default List;