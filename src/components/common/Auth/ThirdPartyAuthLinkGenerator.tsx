"use client"

import React, {EventHandler, useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { ThirdPartyOAuthOptions } from '@/lib/thirdpartyoauth'
import { oAuthGithubUtils } from '@/utilities/api/users/oauth-api';
import { useVerificationAuthState, VerificationAuthOptions} from '@/lib/store';

interface ThirdPartyAuthLinkGeneratorProps {
    data: ThirdPartyOAuthOptions 
}

const ThirdPartyAuthLinkGenerator:React.FC<ThirdPartyAuthLinkGeneratorProps> = ({ data }) => {
    const [link, setLink]= useState<string>("");
    const { githubOauthState, setGithubOauthState, setGithubOauthLink } = useVerificationAuthState()
    const router = useRouter();
  
    
    const oAuthGithubCreate = async() => {
        return await oAuthGithubUtils.oAuthGithubStateGet()
        .then((res) => {
            setGithubOauthState(res.state)
            return res.state})
            .then((res) => {
                const githubURL = `https://github.com/login/oauth/authorize${oAuthGithubUtils.oAuthGithubLink()}&state=${res}`
                setGithubOauthLink(githubURL)
            }).catch((err) => {
                console.error(err)
            })
        }
        
        const handleClick = (e:React.MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();
            oAuthGithubCreate();
            // const githubURL = `${oAuthGithubUtils.oAuthGithubLink()}&state=${githubStateKey}`
            // setGithubOauthLink(githubURL);
            router.push('/auth/githubcallback');
        }

    return (
            <button id={data.name}>
                <Link href={"/auth/githubcallback"}
                        onClick={handleClick}
                        id={data.name}
                        className="flex flex-col items-center">
                    <div className="p-4">
                        <Image src={data.logo} alt={data.alt} width={data.width} height={data.height}/>
                    </div>
                    <div className="border-2 rounded-md px-2">
                        Sign in using {data.name}
                    </div>
                </Link>
            </button>

    )
}

export default ThirdPartyAuthLinkGenerator