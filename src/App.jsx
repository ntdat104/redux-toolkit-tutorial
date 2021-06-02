import React from 'react';
import { Counter } from './features/counter/Counter';

//* Import style
import { Wrapper, Header } from './App.style';

export default function App() {
    return (
        <Wrapper>
            <Header>
                <Counter />
            </Header>
        </Wrapper>
    );
}
