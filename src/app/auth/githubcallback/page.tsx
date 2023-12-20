"use client";
/** 
 * GithubCallBack Page is an intermediary page for the Github OAuth process. 
 * 
 * 
*/ 

import React, { useEffect, useState } from 'react'
import { useVerificationAuthState, VerificationAuthOptions } from '@/lib/store'
import { useSearchParams, ReadonlyURLSearchParams} from 'next/navigation'
import { useRouter } from 'next/navigation';
import { oAuthGithubStateComparison } from '@/utilities/api/users/oauth-api';

interface ParamsState {
    code: string | null;
    state: string | null;    
}

const GithubCallBack = () => {
    const [params, setParams] = useState<ParamsState>({code: null, state: null})
    const searchParams: ReadonlyURLSearchParams | null = useSearchParams();
    const { githubOauthState, githubOauthLink }:VerificationAuthOptions = useVerificationAuthState()
    const { push } = useRouter();

    useEffect (() => {
        push(githubOauthLink);
    }, [])
    
    console.log( githubOauthState)

    return (
        <>
            <div className="w-screen h-screen">
                <div>redirecting</div>
            </div>
        </>
    )
}

export default GithubCallBack