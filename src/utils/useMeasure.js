import React from 'react';

export const useMeasure = deps => {
    const [rect, setRect,] = React.useState({});
    const myref = React.useRef();

    React.useLayoutEffect(() => {
        setRect(myref.current.getBoundingClientRect());
    }, deps);

    return [rect, myref];
};