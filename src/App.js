import React, {useState} from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Dashboard from './components/dashboard/Dashboard'
import Login from './components/login/Login';
import Preferences from './components/preferences/Preferences'


export default () => {
    const [token, setToken] = useState()

    if (!token) {
        return <Login setToken={setToken} />
    }

    return (
        <div className="wrapper">
            <h1>Application</h1>
            <Router>
                <Routes >
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/preferences" element={<Preferences />} />
                </Routes>
            </Router>
        </div>
    )
}
