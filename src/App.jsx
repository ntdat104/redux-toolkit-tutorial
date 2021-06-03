import React from 'react';
import Todo from './features/todoList/Todo';

//* Import style
import { Wrapper, Header } from './App.style';

export default function App() {
    return (
        <Wrapper>
            <Header>
                <Todo />
            </Header>
        </Wrapper>
    );
}
