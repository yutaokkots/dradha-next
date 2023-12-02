"use client";
/** 
 * GithubCallBack Page is the callback endpoint for Github's OAuth 2. 
 * 
 * 
*/ 

import React, { useEffect, useState } from 'react'
import { useVerificationAuthState, VerificationAuthOptions } from '@/lib/store'
import { useSearchParams, ReadonlyURLSearchParams} from 'next/navigation'
import { oAuthGithubStateComparison } from '@/utilities/api/users/oauth-api';

interface ParamsState {
    code: string | null;
    state: string | null;    
}

const GithubCallBack = () => {

    const [params, setParams] = useState<ParamsState>({code: null, state: null})
    const searchParams: ReadonlyURLSearchParams | null = useSearchParams();
    const { githubOauthState }:VerificationAuthOptions = useVerificationAuthState()

    useEffect (() => {
        const code:string | null = searchParams ? searchParams.get('code') : null
        const state:string | null  = searchParams ? searchParams.get('state') : null
        setParams((params) => ({...params, code:code, state:state}))
        // if state is true, then send request to back-end

        if (oAuthGithubStateComparison(githubOauthState, state)){
            
        }


    }, [])
    
    return (
        <>
            <h1>code: {params.code}, state: {params.state}</h1>
                <div>Logging in</div>
        </>
    )
}

export default GithubCallBack