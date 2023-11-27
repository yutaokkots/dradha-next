"use client";

import React from 'react'
import LoginAuth from '../common/Auth/LoginAuth';
import RegisterAuth from '../common/Auth/RegisterAuth';

const AuthModal = () => {
    
    return (
        <>
            <RegisterAuth />
            <LoginAuth />
        </>
    );
};
export default AuthModal;