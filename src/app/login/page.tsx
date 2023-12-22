"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { signIn, useSession } from 'next-auth/react'

const Login = () => {
     const router = useRouter()
    // useSession hook gets the session from SessionProvider (see 'src/pages/_app.tsx')
    const {data: session, status} = useSession();

    if (status == "loading"){
        return <div>LOADING</div>
    }

    if (session){
        router.push("/profile")
        return;
    }
    
    // const handleClick = () => {
    //     console.log("Test")
    // }

    const handleSignIn = () =>{
        signIn(undefined, {callbackUrl: "/"})
    }

    return (
        <>
            <div className="flex justify-center">
                <div> You are not authenticated</div>
                <input type="button" onClick={handleSignIn} value="BUTTON"></input>
            </div>
        </>
    )
}

export default Login