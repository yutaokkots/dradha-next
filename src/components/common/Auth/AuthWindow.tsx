import React from 'react'
import { useAuthModalStore, AuthModalStates } from '@/lib/store'
import LoginAuth from './LoginAuth';
import RegisterAuth from './RegisterAuth';
import ThirdPartyAuth from './ThirdPartyAuth';
import RegisterLoginButton from '@/components/primitives/RegisterLoginButton';
import { oAuthGithub } from '@/utilities/api/users/oauth-api';

const AuthWindow = () => {
    const { registrationLoginState }:AuthModalStates = useAuthModalStore();
    const githublink = oAuthGithub()
    console.log(githublink)
    
    return (
        <div>
            <div>
                <RegisterLoginButton />
            </div>
            <a href={githublink}>
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