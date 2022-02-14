import React, { useState } from 'react'

import { useSpring, animated, config } from 'react-spring'

export default () => {
    const [flip, setFlip] = useState(false)
    const props = useSpring({
        to: { opacity: 0.8 },
        from: { opacity: 0.2 },
        reverse: flip,
        delay: 200,
        config: config.molasses,
        onRest: () => setFlip(!flip),
    })

    const fadeIn = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        delay: 1000,
        config: { duration: 3000 }
    })

    const flex = {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '1rem',
        color: 'red',
        textShadow: '1px 1px 3px black'
    }

    return <animated.div style={fadeIn}>
        <div style={flex}>
            <h1>Hel</h1>
            <animated.h1 style={props}>l</animated.h1>
            <h1>o... We</h1>
            <animated.h1 style={props}>l</animated.h1>
            <h1>come to my page</h1>
            <animated.h1 style={props}>!</animated.h1>
        </div>
    </ animated.div>
}


