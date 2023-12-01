import React from 'react'
import Image from 'next/image'
// import gitlogo from "/oauth/github-mark.png"
//const gitlogo = require("/oauth/github-mark.png")
import ThirdPartyAuthLinkGenerator from './ThirdPartyAuthLinkGenerator'
import { thirdPartyOAuth} from '@/lib/thirdpartyoauth'


const ThirdPartyAuth = () => {
    return (
        <>
            { thirdPartyOAuth.map((data, idx) => 
                <ThirdPartyAuthLinkGenerator
                    key={idx} 
                    data={data}/>
            )
            }
        </>
    )

}

export default ThirdPartyAuth