"use client"

import React from 'react'
import { useAuthModalStore, AuthModalStates } from '@/lib/store'

const RegisterLoginToggler = () => {
    const { registrationLoginState, registrationLoginToggler }:AuthModalStates = useAuthModalStore();
    return (
        <button 
            role="button" 
            aria-pressed="false"
            onClick={registrationLoginToggler}>
            {registrationLoginState? "Already registered? Log in " : "Don't have an account? Sign up"}
        </button>
    )
}

export default RegisterLoginToggler