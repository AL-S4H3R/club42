import React from 'react'
import bg from '../assets/dark-bg.svg'

var para = `
    Enjoy the perks of being @
`

const WelcomeScreen = () => {
    return (
        <div className="h-screen w-screen " style={{ backgroundImage:`url(${bg})`}}>
            <div className="flex items-center justify-center h-full">
                <div className="space-y-12">
                    <h1 className="text-primary-light font-nunito font-bold text-3xl text-center">Welcome to {" < club.42 />"}</h1>
                    <p className="text-center text-primary-other font-mono text-lg tracking-tighter">
                        {para}
                        <span className="text-primary-light">{"< 42 />"}</span>    
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WelcomeScreen
