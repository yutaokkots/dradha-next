import React from 'react'
import Image from 'next/image'
// import gitlogo from "/oauth/github-mark.png"
//const gitlogo = require("/oauth/github-mark.png")
const gitlogo = "/oauth/github-mark-white.png"

const ThirdPartyAuth = () => {
    return (
        <div>
            <Image src={gitlogo} alt="github logo" width="60" height="60"/>
        </div>
    )
}

export default ThirdPartyAuth