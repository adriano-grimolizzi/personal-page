import { Spring } from "react-spring"

export default () =>
    <Spring
        from={{ opacity: 0, }}
        to={{ opacity: 1, }}
        config={{ delay: 2000, duration: 2500 }}>
        {props =>
            <div style={props}>
                <div style={style}>
                    <h2>Welcome to my page...</h2>    
                </div>
            </div>
        }
    </Spring>

const style = {
    color: 'white',
    marginLeft: '1rem'
}