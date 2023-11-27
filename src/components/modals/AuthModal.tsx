"use client";

import React from 'react'
import LoginAuth from '../common/Auth/LoginAuth';
import RegisterAuth from '../common/Auth/RegisterAuth';
import { useAuthModalStore, AuthModalStates } from '@/lib/store'

const AuthModal = () => {
    const { registrationLoginState, registrationLoginToggler}:AuthModalStates = useAuthModalStore()  

    return (
        <>
            {
                registrationLoginState 
                ?
                <RegisterAuth />
                :
                <LoginAuth />
            }
        </>
    );
};
export default AuthModal;