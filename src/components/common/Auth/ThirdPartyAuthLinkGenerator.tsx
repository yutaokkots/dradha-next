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

    const oauthState = async() => {
        return await oAuthGithubUtils.oAuthGithubStateGet()
            .then((res) => {
                setGithubOauthState(res.state)
                return res})
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.error(err)
            })
    }

    useEffect(() => {

        const generateLink = () => {
            let params:string = "";
            if (data.name === "Github"){
                const githubStateKey = randomState()
                setGithubOauthState(githubStateKey)
                params = `${oAuthGithubUtils.oAuthGithubLink()}&state=${githubStatKey}`
            }
            return `${data.link}${params}`
        }
        setlink(`${generateLink()}`)
    }, [])

    const handleClick = () => {

    }

    return (
        <a href={link} 
            onClick={handleClick}
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