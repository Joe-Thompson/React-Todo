import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import "./components/TodoComponents/Todo.css"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    task: 'Learn Java',
                    id: Date.now(),
                    completed: false
                }
            ],
            todo: ''
        };
    }
    addTodo = event => {
        event.preventDefault();
        const newTodo = { task: this.state.todo, completed: false, id: Date.now() };
        this.setState({
            todos: [...this.state.todos, newTodo],
            todo: ''
        });
    };

    changeTodo = event => this.setState({ [event.target.name]: event.target.value });

    toggleTodo = id => {
        let todos = this.state.todos.slice();
        todos = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
                return todo;
            } else {
                return todo;
            }
        });
        this.setState({ todos });
    };

    clearCompletedTodos = event => {
        event.preventDefault();
        let todos = this.state.todos.filter(todo => !todo.completed);
        this.setState({ todos });
    };

    render() {
        return (
            <div className='main'>
                <h1>Task Tracker 3000</h1>
                <TodoForm
                    value={this.state.todo}
                    handleTodoChange={this.changeTodo}
                    handleAddTodo={this.addTodo}
                    handleClearTodos={this.clearCompletedTodos}
                />
                <TodoList
                    handleToggle={this.toggleTodo}
                    todos={this.state.todos}
                />
            </div>
        );
    }
}

export default App;
