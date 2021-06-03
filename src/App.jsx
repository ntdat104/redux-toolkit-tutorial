import React from 'react';
import Todo from './features/todo/Todo';
import Counter from './features/counter/Counter';

//* Import style
import { Wrapper, Header } from './App.style';

export default function App() {
    return (
        <Wrapper>
            <Header>
                <Counter />
                <Todo />
            </Header>
        </Wrapper>
    );
}
