import React from 'react'
import TimeButton from '../timeButton/TimeButton'

import './TimeButtonList.css'

const possibleHours = [
    '10pm', '11pm', '12pm'
]

const print = hour => console.log(hour)

export default () =>
    <div>
        <div className='pick-a-time'>Pick a time</div>
        <div className='buttons-container'>
            {possibleHours.map((hour, index) =>
                <TimeButton hour={hour} onClick={print} key={index} />
            )}
        </div>
    </div>
