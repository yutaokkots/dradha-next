"use client";

import React from 'react'
import LoginAuth from '../common/Auth/LoginAuth';
import RegisterAuth from '../common/Auth/RegisterAuth';
import { useAuthModalStore, AuthModalStates } from '@/lib/store'
import SignInButton from '../primitives/SignInButton';
import SignInCloseButton from '../primitives/SignInCloseButton';

const AuthModal = () => {
    const { registrationLoginState, authModalState }:AuthModalStates = useAuthModalStore()  

    return (
        <>
            <div className="">
                { authModalState &&
                <>            
                    <div className="w-screen h-screen bg-pink-100 z-20 fixed flex justify-center items-center"> 
                        <div className="border-2 rounded-lg bg-white">
                            <SignInCloseButton />
                            {
                                registrationLoginState 
                                ?
                                <RegisterAuth />
                                :
                                <LoginAuth />
                            }
                        </div>   
                    </div>
                </>
            }
            </div>
        </>
    );
};
export default AuthModal;