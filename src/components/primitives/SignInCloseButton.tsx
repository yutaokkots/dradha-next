import React from 'react'
import { useAuthModalStore, AuthModalStates } from '@/lib/store'

const SignInCloseButton = () => {
    const { authModalToggler }:AuthModalStates = useAuthModalStore()
    return (
        <div
            className="">
            <button
                onClick={authModalToggler}
                >
                    <div className="relative w-9 h-9  flex items-center">
                        <span className="h-0.5 w-10/12 z-11 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm bg-black rotate-45"></span>
                        <span className="h-0.5 w-10/12 z-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-sm bg-black -rotate-45"></span>
                    </div>
            </button>
        </div>
    )
}

export default SignInCloseButton