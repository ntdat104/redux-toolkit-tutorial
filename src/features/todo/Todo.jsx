import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//* Import action
import { selectTodo, addTodo, removeTodo } from './todoSlice';

export default function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector(selectTodo);

    const [newTodo, setNewTodo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(newTodo));
        setNewTodo('');
    };

    return (
        <div>
            <h1>TodoList</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
                <button type='submit'>Thêm</button>
            </form>
            <ul>
                {todos.map((todo, idx) => {
                    return (
                        <li onClick={() => dispatch(removeTodo(todo))} key={idx.toString()}>
                            {todo}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
