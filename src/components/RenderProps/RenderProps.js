import React from 'react'
import ToggleWithRenderProps from '../Toggle/ToggleWithRenderProps';

export default function RenderProps() {
    return (
        <div>
            <h1>Render Props Example:</h1>
            <ToggleWithRenderProps render={(isToggleOn, toggleHandler) => (
                <>
                    <h1>{`${isToggleOn}`}</h1>
                    <button onClick={toggleHandler}>Toggle from render props</button>
                </>
            )} />
        </div>
    )
}
