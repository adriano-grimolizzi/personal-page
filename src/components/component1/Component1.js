import { Spring } from 'react-spring'

export default () =>
    <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}>
        {props =>
            <div style={props}>
                <div style={c1Style}>
                    <h1>Component 1</h1>
                    <p>;asldkjf;lasdjkf;lkas dj;flkasjd;flkasjd;flkjas;dlkfj;asldfjkas;lkfdja</p>
                    {/* <Spring
                        from={{ number: 0 }}
                        to={{ number: 10 }}
                    >
                        {props =>
                            <div style={props}>
                                <h1 style={counter}>
                                    {props}
                                </h1>
                            </div>
                        }
                    </Spring> */}
                </div>
            </div>
        }
    </Spring>

const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}
const counter = {
    background: '$333',
    textAlign: 'center',
    width: '100px',
    borderRadius: '50%',
    margin: '1rem auto'
}