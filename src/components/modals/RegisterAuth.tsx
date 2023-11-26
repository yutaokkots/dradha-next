"use client";

import React, { ChangeEvent, useState } from 'react'
import { InputField } from '../primitives/InputField';


interface CredentialOptions {
    username: string;
    email: string;
    password: string;
    passwordConfirm: string;
}

const RegisterAuth = () => {
    const [credentials, setCredentials] = useState<CredentialOptions>({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    })

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setCredentials({...credentials, [e.target.name]:e.target.value})
    }

    const handleSubmit = () => {

    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input className="bg-black" placeholder="username"   type="text"     name="username"         onChange={handleChange}></input>
            <input className="bg-black" placeholder="email"      type="email"    name="email"            onChange={handleChange}></input>
            <input className="bg-black" placeholder="password"   type="password" name="password"         onChange={handleChange}></input>
            <input className="bg-black" placeholder="confirm"    type="password" name="passwordConfirm"  onChange={handleChange}></input>
            <InputField />
            <button>Submit</button>    
        </form>
    )
}

export default RegisterAuth;