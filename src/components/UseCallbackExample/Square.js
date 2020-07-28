import React from 'react'
import { useCountRenders } from '../../utils/useCountRenders';

const Hello = React.memo(({ n, increment }) => {

    useCountRenders();

    return (
        <>
            <button onClick={() => increment(n)}>{n}</button>
        </>
    )

});

export default Hello;