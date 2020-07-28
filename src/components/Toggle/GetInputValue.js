import React from 'react';

function GetInputValue({ render, }) {

    const [username, setUsername,] = React.useState('');

    function handleChange() {
        return (e) => setUsername(e.target.value);
    };

    return (
        <>
            {render(username, handleChange,)}
        </>
    )
}

export default GetInputValue;