import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className="tasks">
            {props.todos.map(todo => (
                <Todo
                    handleToggle={props.handleToggle}
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </div>
    );
};

export default TodoList;