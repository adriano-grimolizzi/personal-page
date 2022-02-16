import React, { useEffect, useState } from 'react'
import axios from 'axios'

import fetchToken from '../../services/loginService'

export default () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const [fetchedData, setFetchedData] = useState();

    useEffect(() => {
        const getData = async () => {
            const response = await axios.get(
                'http://localhost:3002/login'
            );
            setFetchedData(response.data.token);
        };
        getData();
    }, []);

    if (fetchedData)
        console.log(fetchedData);

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
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}
