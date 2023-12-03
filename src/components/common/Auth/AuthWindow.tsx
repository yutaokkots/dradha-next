import React from 'react'
import { useAuthModalStore, AuthModalStates } from '@/lib/store'
import LoginAuth from './LoginAuth';
import RegisterAuth from './RegisterAuth';
import ThirdPartyAuth from './ThirdPartyAuth';
import RegisterLoginButton from '@/components/primitives/RegisterLoginButton';

const AuthWindow = () => {
    const { registrationLoginState }:AuthModalStates = useAuthModalStore();

    
    return (
        <div>
            <div>
                <RegisterLoginButton />
            </div>
            <div className="flex justify-center items-center py-3 pb-10 flex-col">
                <ThirdPartyAuth />
            </div>
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