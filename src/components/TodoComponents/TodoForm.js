import React from 'react';

const TodoForm = props => {
    return (
        <form className="taskForm">
            <input
                className="taskInput"
                onChange={props.handleTodoChange}
                type="text"
                name="todo"
                value={props.value}
                placeholder="Please Enter a Task"
            />
            <button className="formButton add" onClick={props.handleAddTodo}>Add Task</button>
            <button className="formButton delete" onClick={props.handleClearTodos}>Clear Completed Tasks</button>
        </form>
    );
};

export default TodoForm;