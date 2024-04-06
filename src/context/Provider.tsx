"use client"
import React, { Children } from 'react'
import { SessionProvider } from 'next-auth/react'

interface Props {
    children: React.ReactNode;
}

function Provider({ children }: Props) {
    return <SessionProvider>{children}</SessionProvider>
}

export default Provider
