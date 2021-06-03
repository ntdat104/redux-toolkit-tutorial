import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//* Import action
import { decrement, increment, incrementByAmount, selectCount, fetchCount } from './counterSlice';

//* Import styles
import { Group, Button, Value, Input } from './Counter.style';

export default function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    //* Khởi tạo
    const [incrementAmount, setIncrementAmount] = useState('2');
    const incrementValue = Number(incrementAmount) || 0;

    useEffect(() => {
        dispatch(fetchCount());
    }, [dispatch]);

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
