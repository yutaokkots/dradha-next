"use client"

import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { ThirdPartyOAuthOptions } from '@/lib/thirdpartyoauth'
import { oAuthGithubUtils } from '@/utilities/api/users/oauth-api';
import { useVerificationAuthState, VerificationAuthOptions} from '@/lib/store';

interface ThirdPartyAuthLinkGeneratorProps {
    data: ThirdPartyOAuthOptions 
}

const ThirdPartyAuthLinkGenerator:React.FC<ThirdPartyAuthLinkGeneratorProps> = ({ data }) => {
    const [link, setlink]= useState<string>("");
    const { githubOauthState, setGithubOauthState} = useVerificationAuthState()

    useEffect(() => {
        const randomState = () => {
            return oAuthGithubUtils.oAuthGithubAuthorizationCode(20)
        }
        const generateLink = () => {
            let params:string = "";
            if (data.name === "Github"){
                const githubStatKey = randomState()
                setGithubOauthState(githubStatKey)
                params = `${oAuthGithubUtils.oAuthGithubLink()}&state=${githubStatKey}`
            }
            return `${data.link}${params}`
        }
        setlink(`${generateLink()}`)
    }, [])

    return (
        <a href={link} 
            className="flex flex-col items-center">
            <div className="p-4">
                <Image src={data.logo} alt={data.alt} width={data.width} height={data.height}/>
            </div>
            <div className="border-2 rounded-md px-2">
                Sign in using {data.name}
            </div>
        </a>

    )
}

export default ThirdPartyAuthLinkGenerator