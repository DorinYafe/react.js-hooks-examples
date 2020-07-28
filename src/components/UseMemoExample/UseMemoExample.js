import React from 'react';
import { useFetch, } from '../../utils/useFetch';

function computeLongestWord(arr) {
    if (!arr) {
        return [];
    }

    console.log('Computing longest word.');
    // console.log(arr)

    let longestWord = '';

    JSON.parse(arr).forEach(word => {
        // console.log(word.text.length)
        if (word.text.length > longestWord.length) {
            longestWord = word.text;
        };
    });
    // console.log(longestWord.length)
    return longestWord;
};

export default function UseMemoExample() {

    const [count, setCount,] = React.useState(0);
    // const { data, } = useFetch(`https://api.kanye.rest`).toString();
    const { data, } = useFetch(`https://type.fit/api/quotes`);

    const longestWord = React.useMemo(() => computeLongestWord(data), [data]);

    return (
        <div>
            <h1>Use Memo Example:</h1>
            <div>Count: {count}</div>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <div>{JSON.stringify(longestWord)}</div>
        </div>
    )
}
