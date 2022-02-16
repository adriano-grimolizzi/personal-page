import React from 'react'

import './TimeButton.css'

export default ({hour, onClick}) =>
    <button className='time-button' onClick={() => onClick(hour)}>
        {hour}
    </button>
