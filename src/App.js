import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import LoginPage from './components/pages/LoginPage'


import './App.css'

export default function App() {
    return (
        <Router>
            <div>
                <Switch>

                    <Route exact path="/" component={ LoginPage } />
                    
                </Switch>
                
            </div>
        </Router>
    )
}

