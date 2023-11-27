"use client";

import React, { ChangeEvent, FormEvent, useState, useEffect } from 'react'
import { InputField } from '../../primitives/InputField';
import PasswordCheck from './PasswordCheck';
import { registrationForm, registrationCSSClass } from './registration';

interface CredentialOptions {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

export interface PasswordOptions {
    validPassword: boolean,
    passwordMatch: boolean,
    uppercase: boolean,
    lowercase: boolean,
    number: boolean,
    symbol: boolean,
    minimumChar: boolean
}

const RegisterAuth = () => {
    const [passwordError, setPasswordError] = useState<PasswordOptions>({
                                                        validPassword: false,
                                                        passwordMatch: false,
                                                        uppercase: false,
                                                        lowercase: false,
                                                        number: false,
                                                        symbol: false,
                                                        minimumChar: false
                                                    });

    const [credentials, setCredentials] = useState<CredentialOptions>({
                                                        username: "",
                                                        email: "",
                                                        password: "",
                                                        passwordConfirm: "",
                                                    });

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials, [e.target.name]:e.target.value})
    }

    useEffect(() => {
        const passwordMatchCheck = () => {
            const isMatch = credentials.password == credentials.passwordConfirm && credentials.passwordConfirm != "";
            const containsUppercase = /[A-Z]/.test(credentials.password);
            const containsLowercase = /[a-z]/.test(credentials.password);
            const containsNumber = /[0-9]/.test(credentials.password);
            const containsSymbol = /[!)(?\[\]~;:@#%$^&*+=]/g.test(credentials.password);
            const isMinChar = credentials.password.length > 5;
            const isValidPassword = isMatch && containsUppercase && containsLowercase && containsNumber && containsSymbol && isMinChar;
            setPasswordError({...passwordError, 
                ["validPassword"]: isValidPassword,
                ["passwordMatch"]:isMatch,
                ["uppercase"]:containsUppercase,
                ["lowercase"]:containsLowercase,
                ["number"]:containsNumber,
                ["symbol"]:containsSymbol,
                ["minimumChar"]:isMinChar,})
        }
        passwordMatchCheck ()
        console.log(passwordError)
    
    }, [credentials.password, credentials.passwordConfirm])

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(credentials)
    }

    return (
        <>
            
                <form 
                    role="form" 
                    onSubmit={handleSubmit} 
                    className="flex flex-col items-center ">
                        {registrationForm.map((attributes, idx) => 
                            (
                            <>
                                <label >{attributes.placeholder}</label>
                                <InputField 
                                    key={idx} 
                                    inputAttributes={attributes} 
                                    handleChange={handleChange} 
                                    inputCSSClass={registrationCSSClass}/>
                            </>)
                            )
                        }
                        <button className="border-2 rounded-md bg-gray-500 disabled:bg-gray-200 m-2 px-2" disabled={!passwordError.validPassword}>Submit</button>    
                </form>
                <PasswordCheck passwordError={passwordError}/>
      
        </>
    )
}

export default RegisterAuth;