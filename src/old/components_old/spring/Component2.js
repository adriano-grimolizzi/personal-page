
import { Spring } from 'react-spring'

export default ({onClick}) =>
    <Spring
        from={{ opacity: 0, }}
        to={{ opacity: 1, }}
        config={{ delay: 1000, duration: 1000 }}>
        {props =>
            <div style={props}>
                <div style={c2Style}>
                    <h1>Component 1</h1>
                    <p>;asldkjf;lasdjkf;lkas dj;flkasjd;flkasjd;flkjas;dlkfj;asldfjkas;lkfdja</p>
                    <button onClick={onClick}>Show</button>
                        </div>
            </div>
        }
    </Spring>


const c2Style = {
    background: 'slateblue',
    color: 'white',
    padding: '1.5rem'
}