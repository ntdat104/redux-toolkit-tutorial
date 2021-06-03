import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//* Import action
import { decrement, increment, incrementByAmount, getCount } from './counterSlice';

//* Import styles
import { Group, Button, Value, Input } from './Counter.style';

export default function Counter() {
    const count = useSelector(getCount);
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
