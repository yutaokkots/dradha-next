

import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

const LoginButton = () => {
    const { data: session, status } = useSession()
    if (session) {
        return (
            <>
                Signed in as {session.user.email} <br/>
                <button onClick={() => signOut()}>Sign out</button>
            </>
        )
    }
    const handleClick = (e) => {
        e.preventDefault()
        signIn()
    }

    return (
        <>
            not signed in<br/>
            <button onClick={handleClick}>Sign in </button>
        </>
    )
}

export default LoginButton