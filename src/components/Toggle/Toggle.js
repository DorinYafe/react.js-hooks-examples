import React from 'react'

function toggle(Component) {
    return () => {

        const [isToggleOn, setToggleOn,] = React.useState(false);

        function toggleHandler() {
            setToggleOn(pre => !pre)
        }

        return (
            <>
                <Component
                    isToggleOn={isToggleOn}
                    toggleHandler={toggleHandler}
                />
            </>
        )
    }
}

export default toggle;