"use client"

import React from 'react'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"

interface Props {
    children?: React.ReactNode;
    session: any
}

const NextAuthProvider = ({
    children, session,}: Props) => {
    return (
        <SessionProvider session={session}>
            {children }
        </SessionProvider>
    )
}

export default NextAuthProvider;