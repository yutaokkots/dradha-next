"use client";

import React from 'react'

import { useAuthModalStore, AuthModalStates } from '@/lib/store'
import SignInCloseButton from '../primitives/SignInCloseButton';
import AuthWindow from '../common/Auth/AuthWindow';

const AuthModal = () => {
    const { authModalState }:AuthModalStates = useAuthModalStore();

    return (
        <div data-testid="auth-modal">
            <div className={` ${authModalState ? 
                    "overflow-hidden opacity-100 transition-all duration-200 ease-out delay-200"
                    : 
                    "overflow-hidden opacity-0 invisible transition-all duration-200 ease-out delay-200"}  `}>
                <>            
                    <div className="
                    w-screen h-screen backdrop-blur-sm bg-slate-600/50 shadow-md z-20 fixed flex justify-center items-center"> 
                        <div className="flex flex-col border-2 rounded-lg bg-slate-700 m-3 p-2">
                            <div className="self-end">
                                <SignInCloseButton />
                            </div>
                            <AuthWindow />
                        </div>   
                    </div>
                </>
            </div>
        </div>
    );
};
export default AuthModal;