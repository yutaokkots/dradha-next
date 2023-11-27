import React from 'react'

import { PasswordOptions } from './RegisterAuth'

interface PasswordCheckProps {
    passwordError: PasswordOptions;
}

const PasswordCheck= ({ passwordError }:PasswordCheckProps) => {
    return (
        <>
            <div 
                className={`${passwordError.uppercase ? "text-green-500" : "text-red-300"}`}>
                Contains at least one upper-case letter (A-Z)</div>
            <div 
                className={`${passwordError.lowercase ? "text-green-500" : "text-red-300"}`}>
                Contains at least one lower-case letter (a-z)</div>
            <div 
                className={`${passwordError.number ? "text-green-500" : "text-red-300"}`}>
                Contains at least one number (0-9)</div>
            <div 
                className={`${passwordError.symbol ? "text-green-500" : "text-red-300"}`}>
                Contains at least one special character &quot;!)(?[]~;:@#%$^&*+=&ldquo; </div>
            <div
                className={`${passwordError.minimumChar ? "text-green-500" : "text-red-300"}`}>
                Consists of six characters or more</div>
            <div 
                className={`${passwordError.passwordMatch ? "text-green-500" : "text-red-300"}`}>
                Passwords match</div>
        </>
    )
}

export default PasswordCheck

// !)(?[]~;:@#%$^&*+=
