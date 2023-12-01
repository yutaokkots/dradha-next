/** 
 * PasswordCheckProps is an interface defining the props expected by the PasswordCheck component.
 * A prop with type PasswordOptions is passed. 
 * 
 * Password must contain at least one special character 
 * from the following: !)(?[]~;:@#%$^&*+=
*/ 

import React from 'react'

import { PasswordOptions } from './RegisterAuth'

interface PasswordCheckProps {
    passwordError: PasswordOptions;
}

const PasswordCheck= ({ passwordError }:PasswordCheckProps) => {
    return (
        <div className={`text-sm border-2 rounded-md p-2 ${passwordError.validPassword ? "border-green-200": "border-red-200"}`}>
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
        </div>
    )
}

export default PasswordCheck


