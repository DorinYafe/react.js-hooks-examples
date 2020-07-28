import React from 'react'
import Hello from './Hello';
import Hello2 from './Hello2';
import Square from './Square';

export default function UseCallbackExample() {

    const [count, setCount,] = React.useState(0);
    const favoriteNums = [7, 21, 37,];

    const increment = React.useCallback(() => {
        setCount(c => c + 1)
    }, [setCount]);

    const incrementPluseFive = React.useCallback(
        n => {
            setCount(c => c + n)
        }, [setCount]);

    return (
        <div style={{ margin: '1rem 0' }}>
            <h1>Use Callback Example:</h1>
            <Hello increment={increment} />
            <Hello2 increment={incrementPluseFive} />
            <div>Count: {count}</div>
            {
                favoriteNums.map(n => {
                    return <Square increment={incrementPluseFive} n={n} key={n} />
                })
            }
        </div>
    )
}
