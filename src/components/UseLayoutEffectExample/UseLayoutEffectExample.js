import React from 'react'
import { useFetch, } from '../../utils/useFetch';

export default function UseLayoutEffectExample() {

    const [name, setName,] = React.useState('');
    const [rect, setRect,] = React.useState({});
    const inputRef = React.useRef();
    const divRef = React.useRef();
    const { data, loading, } = useFetch(`http://numbersapi.com/43/trivia`);

    React.useEffect(() => {
        inputRef.current.focus();
    }, []);

    React.useLayoutEffect(() => {
        setRect(inputRef.current.getBoundingClientRect());
    }, [data])

    return (
        <div>
            <h1>Use Layout Effect Example:</h1>
            <input
                type="text"
                placeholder="name"
                ref={inputRef}
                onChange={e => setName(e.target.value)}
            />
            <p>{name}</p>
            <button style={{ marginBottom: '1rem' }} onClick={() => console.log(inputRef)}>Console log input fields</button>
            <div style={{ display: "flex" }}>
                <div ref={divRef}>{!data ? 'loading...' : data}</div>
            </div>
            <h4>The boundries of the div element showing the data:</h4>
            <pre>{JSON.stringify(rect, null, 2)}</pre>
        </div>
    )
}
