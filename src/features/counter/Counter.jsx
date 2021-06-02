import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//* Import action
import { decrement, increment, incrementByAmount, selectCount } from './counterSlice';

//* Import styles
import { Group, Button, Value, Input } from './Counter.style';

export default function Counter() {
    //* lấy count(value) từ state và hàm dispatch
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    //* Khởi tạo
    const [incrementAmount, setIncrementAmount] = useState('2');
    const incrementValue = Number(incrementAmount) || 0;

    return (
        <>
            <Group>
                <Button onClick={() => dispatch(decrement())}>-</Button>
                <Value>{count}</Value>
                <Button onClick={() => dispatch(increment())}>+</Button>
            </Group>
            <Group>
                <Input value={incrementAmount} onChange={(e) => setIncrementAmount(e.target.value)} />
                <Button onClick={() => dispatch(incrementByAmount(incrementValue))}>Add Amount</Button>
            </Group>
        </>
    );
}
