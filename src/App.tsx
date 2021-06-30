import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import LoginScreen from './screens/LoginScreen'
import PrivateRoute from './routes/PrivateRoute'
import WelcomeScreen from './screens/WelcomeScreen'
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path='/login' component={LoginScreen} />
                    <PrivateRoute path='/' component={WelcomeScreen} />
                </Switch>
            </BrowserRouter>
        </>
    )
}

export default App