import React from 'react'
import { useFetch, } from '../../utils/useFetch';
import { useMeasure, } from '../../utils/useMeasure';

export default function UseEffectExample() {

    React.useEffect(() => {
        const onMouseMove = e => {
            console.log(e);
        };
        window.addEventListener('mousemove', onMouseMove);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    // const [count, setCount,] = React.useState(() => {
    //     JSON.parse(localStorage.getItem('count'));
    // });
    // const { data, loading, } = useFetch(`http://numbersapi.com/${count}/trivia`);

    const { data, loading, } = useFetch(`http://numbersapi.com/43/trivia`);
    const [rect, paraRef,] = useMeasure([])
    // React.useEffect(() => {
    //     localStorage.setItem(JSON.stringify('count', count));
    // }, [count]);

    return (
        <div>
            <h1>Use Effect Example:</h1>
            <p>Open the console and see where your mouse at...</p>

            <hr />

            <h2>Custom useFetch hook:</h2>
            <div style={{ display: 'flex' }}>
                <p ref={paraRef}>{!data ? 'loading...' : data}</p>
            </div>
            <h5>The measures of the para above showing the data:</h5>
            <pre>{JSON.stringify(rect, null, 2)}</pre>
            {/* <p>Count: {count}</p> */}
            {/* <button onClick={() => setCount(c => c + 1)}>increment</button> */}
        </div>
    )
}
