
import { useState } from 'react'
import Component1 from '../components/component1/Component1'
import Component2 from '../components/component1/Component2'
import Component3 from '../components/component1/Component3'
import { Transition, animated } from 'react-spring'
import './App.css'

export default () => {
    const [showComponent3, setShowComponent3] = useState(false)
    const onClick = () => setShowComponent3(!showComponent3)

    return (
        <div className="App">

            <Component1 />
            <Component2 onClick={onClick} />
            <Transition
                native
                items={showComponent3}
                from={{ opacity: 0 }}
                enter={{ opacity: 1 }}
                leave={{ opacity: 0 }}
            >
                {show => show && (props => <animated.div style={props}>
                    <Component3 />
                </animated.div>)}
            </Transition>

        </div>
    )
}