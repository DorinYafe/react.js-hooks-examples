import React from 'react';

export const useFetch = url => {
    const isCurrent = React.useRef(true);
    const [state, setState,] = React.useState({ data: null, loading: true });

    React.useEffect(() => {
        return () => {
            isCurrent.current = false
        };
    }, []);

    React.useEffect(() => {
        setState(state => ({ data: state.data, loading: true }));
        fetch(url)
            .then(x => x.text())
            .then(y => {
                setState({ data: y, loading: false });
            })
    }, [url, setState,])

    return state;
} 