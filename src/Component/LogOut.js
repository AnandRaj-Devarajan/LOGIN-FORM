import React from 'react'

export default function LogOut() {
    const logInPg = () => {
        window.open('/')
    }
    return (
        <div>
            <h2> "hello Admin"</h2>
            <button onClick={logInPg}>Log Out</button>
        </div>
    )
}
