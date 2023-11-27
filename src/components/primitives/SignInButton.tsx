"use client";

import React from 'react'
import {useAuthModalStore, AuthModalStates} from '@/lib/store'

const SignInButton = () => {
    const { authModalToggler }:AuthModalStates = useAuthModalStore();

    return (
        <button
            onClick={authModalToggler}>
            Sign in
        </button>
    )
}

export default SignInButton