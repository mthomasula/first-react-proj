import React, { useState } from 'react'
import "../App.css";

const TodoItem = (props) => {

    const [toggle, setToggle] = useState(false);

return (
        <div className="ui raised segment" >
           <div className="item" >
                <div className="content">
                    <div className={toggle ? "striked" : ""}>{props.todo.text}</div>
                </div>
                <p></p>
                <button className="small ui pink button" onClick={() => setToggle(!toggle)} >Completed</button>
                <button className="small ui pink button" onClick={() => props.deleteTodoHandler(props.todo)}>Delete</button>
            </div>
        </div>
    )
}

export default TodoItem;