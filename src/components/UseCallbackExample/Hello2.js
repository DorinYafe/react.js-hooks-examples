import React from 'react'
import { useCountRenders } from '../../utils/useCountRenders';

const Hello = React.memo(({ increment, }) => {

    useCountRenders();

    return (
        <>
            <button onClick={() => increment(5)}>Hello2</button>
        </>
    )

});

export default Hello;