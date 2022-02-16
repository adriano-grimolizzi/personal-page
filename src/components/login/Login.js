import React, { useEffect, useState } from 'react'

import loginService from '../../services/loginService'

export default ({setToken}) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {
        const getData = async () => {
            const response = await loginService.fetchToken()
            console.log(response.data.token);
        };
        getData();
    }, []);

    const handleSubmit = async event => {
        event.preventDefault()
        const token = await loginService.fetchToken({username, password})
        setToken(token)
    }

    return (
        <div className='login-wrapper'>

            <h1>Please Log In</h1>
            <form>
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
                    <button 
                        type='submit'
                        onSubmit={handleSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )
}
