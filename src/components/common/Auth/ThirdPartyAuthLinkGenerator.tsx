"use client"

import React, {useEffect, useState} from 'react'
import Image from 'next/image'
import { ThirdPartyOAuthOptions } from '@/lib/thirdpartyoauth'
import { oAuthGithubLink } from '@/utilities/api/users/oauth-api';

interface ThirdPartyAuthLinkGeneratorProps {
    data: ThirdPartyOAuthOptions 
}

const ThirdPartyAuthLinkGenerator:React.FC<ThirdPartyAuthLinkGeneratorProps> = ({ data }) => {
    const [link, setlink]= useState<string>("")

    useEffect(() => {
        const generateLink = async():Promise<string> => {
            let linkURL:string = ""
            let params:string = ""
            if (data.name === "Github"){
                linkURL = data.link
                const params = oAuthGithubLink()
            }
            return `${linkURL}${params}`
        }

    }, [])

    console.log(link)

    return (
        <a href={link} className="flex flex-col items-center">
            <div className="p-4">
                <Image src={data.logo} alt={data.alt} width={data.width} height={data.height}/>
            </div>
            <div className="border-2 rounded-md px-2">
                Sign in using Github
            </div>
        </a>

    )
}

export default ThirdPartyAuthLinkGenerator