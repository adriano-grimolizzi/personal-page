import { Spring } from "react-spring"

export default () =>
    <Spring
        from={{ opacity: 0, }}
        to={{ opacity: 1, }}
        config={{ delay: 1000, duration: 2500 }}>
        {props =>
            <div style={props}>
                <div style={style}>
                    <h1>Adriano Grimolizzi</h1>    
                </div>
            </div>
        }
    </Spring>

const style = {
    color: 'white',
    marginLeft: '0.5rem',
    marginRight: '0.5rem'
}