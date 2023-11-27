import React from 'react'
import { useAuthModalStore, AuthModalStates } from '@/lib/store'
import LoginAuth from './LoginAuth';
import RegisterAuth from './RegisterAuth';
import ThirdPartyAuth from './ThirdPartyAuth';
import RegisterLoginToggler from '@/components/primitives/registerLoginToggler';

const AuthWindow = () => {
    const { registrationLoginState }:AuthModalStates = useAuthModalStore();
    return (
        <div>
            <div>
                { registrationLoginState ? "Register a new account" : "Log in"}
            </div>
            <div>
                <RegisterLoginToggler />
            </div>
            <a href="https://github.com/login/oauth/authorize">
                <div className="flex justify-center items-center py-3 pb-10 flex-col">
                    <div className="p-4"><ThirdPartyAuth /></div>
                    <div className="border-2 rounded-md px-2">
                        Sign in using Github
                    </div>
                </div>
            </a>
            <div className="grid  grid-cols-8 items-center">
                <div className="col-span-3">
                    <hr></hr>
                </div>
                <div className="col-span-2 text-center">
                    or
                </div>
                <div className="col-span-3">
                    <hr></hr>
                </div>
            </div>
            <div className="mt-10">
                {
                    registrationLoginState 
                    ?
                    <RegisterAuth />
                    :
                    <LoginAuth />
                }
            </div>
        </div>
    )
}

export default AuthWindow