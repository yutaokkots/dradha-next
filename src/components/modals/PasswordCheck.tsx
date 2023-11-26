import React from 'react'

import { PasswordOptions } from './RegisterAuth'

const PasswordCheck= ({ passwordError }:PasswordOptions) => {
    return (
        <>
            <div className={`${passwordError.passwordMatch ? "text-green-500" : "text-red-600"}`}>Password Matches</div>
            <div className={`${passwordError.uppercase ? "text-green-500" : "text-red-600"}`}>Contains at least 1 upper-case letter (A-Z)</div>
            <div className={`${passwordError.lowercase ? "text-green-500" : "text-red-600"}`}>Contains at least 1 lower-case letter (a-z)</div>
            <div className={`${passwordError.number ? "text-green-500" : "text-red-600"}`}>Contains at least 1 number (0-9)</div>
            <div className={`${passwordError.symbol ? "text-green-500" : "text-red-600"}`}>Contains at least 1 special character !)(?[]~;:@#%$^&*+= </div>
            <div className={`${passwordError.minimumChar ? "text-green-500" : "text-red-600"}`}>6 characters or longer</div>
        </>
    )
}

export default PasswordCheck

// !)(?[]~;:@#%$^&*+=
