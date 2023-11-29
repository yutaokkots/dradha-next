"use client"

import React from 'react'
import { useAuthModalStore, AuthModalStates } from '@/lib/store'

const RegisterLoginButton = () => {
    const { registrationLoginState, registrationLoginToggler }:AuthModalStates = useAuthModalStore();
    return (
        <>
            <div className="flex flex-row justify-evenly">
                <button 
                    className="disabled:border-b-2 p-2 m-2" 
                    role="button" 
                    aria-pressed="false"
                    disabled={registrationLoginState}
                    onClick={registrationLoginToggler}>Register</button>
                <button
                    className="disabled:border-b-2 m-2 px-2" 
                    role="button" 
                    aria-pressed="false"
                    disabled={!registrationLoginState}
                    onClick={registrationLoginToggler}>Log in</button>
            </div>
        </>
    )
}

export default RegisterLoginButton