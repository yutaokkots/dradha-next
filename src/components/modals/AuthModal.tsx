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
                    <div className="w-screen h-screen backdrop-blur-sm bg-slate-600/50 shadow-md z-20 fixed flex justify-center items-center"> 
                        <div className="flex flex-col border-2 rounded-lg bg-slate-700 m-3 p-2">
                            <div className="self-end">
                                <SignInCloseButton />
                            </div>

                            <div>
                                {
                                    registrationLoginState 
                                    ?
                                    <RegisterAuth />
                                    :
                                    <LoginAuth />
                                }
                            </div>
                        </div>   
                    </div>
                </>
            }
            </div>
        </>
    );
};
export default AuthModal;