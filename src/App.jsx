import React from 'react';
import TodoList from './features/todoList/TodoList';

//* Import style
import { Wrapper, Header } from './App.style';

export default function App() {
    return (
        <Wrapper>
            <Header>
                <TodoList />
            </Header>
        </Wrapper>
    );
}
