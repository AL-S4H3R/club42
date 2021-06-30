import React from 'react'
import { useAuth } from '../context/AuthContext'

const LoginScreen = () => {
    const { googleSignIn } = useAuth()
    return (
        <div className="h-screen w-screen" style={{backgroundColor:"#313131"}}>
            <div className="flex items-center justify-center h-full">
                <div className="space-y-4">
                    <h1 className="font-nunito text-center text-4xl text-primary-light font-bold">{"< club.42 />"}</h1>
                    <div className="flex justify-center">
                        <button onClick={googleSignIn} className="p-2 font-rubik uppercase font-bold border-2 border-dashed text-primary-light border-primary-light ">Sign In</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen