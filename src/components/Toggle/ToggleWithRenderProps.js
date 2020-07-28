import React from 'react'

function ToggleWithRenderProps({ render, }) {

    const [isToggleOn, setToggleOn,] = React.useState(false);

    function toggleHandler() {
        setToggleOn(pre => !pre)
    }

    return (
        <>
            {render(isToggleOn, toggleHandler)}
        </>
    )
}


export default ToggleWithRenderProps;