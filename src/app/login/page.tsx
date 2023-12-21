"use client"
import React from 'react'

const Login = () => {
    const handleClick = () => {
        console.log("Beep Boop")
    }
    return (
        <>
            <div>
                <div> You are not authenticated</div>
                <input type="button" onClick={handleClick} value="BUTTON"></input>
            </div>
        </>
    )
}

export default Login