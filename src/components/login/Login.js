import React, { useState } from 'react'

import loginService from '../../services/loginService'

export default ({ setToken }) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = async event => {
        event.preventDefault()
        const response = await loginService.fetchToken({ username, password })
        setToken(response.data.token)
    }

    return (
        <div className='login-wrapper'>
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input
                        type='text'
                        onChange={e => setUsername(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input
                        type='password'
                        onChange={e => setPassword(e.target.value)} />
                </label>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
