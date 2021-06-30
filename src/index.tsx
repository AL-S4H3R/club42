import React from 'react'
import { render } from 'react-dom'
import './index.css'
import App from './App'
import AuthContextProvider from './context/AuthContext'

const root = document.getElementById('root')
render(
    <AuthContextProvider>
        <App />
    </AuthContextProvider>,
    root
);