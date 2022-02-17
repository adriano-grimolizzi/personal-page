import React from 'react'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Dashboard from './components/dashboard/Dashboard'
import Login from './components/login/Login';
import Preferences from './components/preferences/Preferences'

const getToken = () =>
    JSON.parse(sessionStorage.getItem('token'))?.token

const setToken = userToken =>
    sessionStorage.setItem('token', JSON.stringify(userToken))

export default () =>
    !getToken() ?
        <Login setToken={setToken} /> :
        <div className="wrapper">
            <h1>Application</h1>
            <Router>
                <Routes >
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/preferences" element={<Preferences />} />
                </Routes>
            </Router>
        </div>    
