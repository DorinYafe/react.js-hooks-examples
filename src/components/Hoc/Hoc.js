import React from 'react'
import toggle from '../Toggle/Toggle';
import GetInputValue from '../Toggle/GetInputValue';

function ToggleH1({ isToggleOn, toggleHandler, }) {
    return (
        <>
            <h1>{`${isToggleOn}`}</h1>
            <button onClick={toggleHandler}>Toggle it!</button>
        </>
    )
}

const WithH1 = toggle(ToggleH1);

const WithPandA = toggle(({ isToggleOn, toggleHandler, }) => (
    <>
        <p>{`${isToggleOn}`}</p>
        <a href="#" onClick={toggleHandler}>Click me!</a>
    </>
))

export default function Hoc() {
    return (
        <div>
            <h1>Hoc - High Order Component Example:</h1>
            <GetInputValue render={(username, handleChange,) => (
                <>
                    <input type="text" placeholder="Username" onChange={handleChange()} />
                    <p>{username}</p>
                </>
            )} />
            <WithH1 />
            <WithPandA />
        </div>
    )
}
