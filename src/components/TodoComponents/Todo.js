import React from 'react';
import "./Todo.css"

const Todo = props => {
    return (
        <div
            className="taskDiv"
            style={props.todo.completed ? { textDecoration: 'line-through',
                color: "white",
                backgroundColor: "red",
                borderRadius: ".5rem"
            } : null}
            onClick={() => {props.handleToggle(props.todo.id)}} >

            {props.todo.task}
        </div>
    );
};

export default Todo;
