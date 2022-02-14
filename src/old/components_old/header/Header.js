import { AppBar, Toolbar, Button } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";
import { Spring } from "react-spring"

import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import Adriano from "../../fighetto/title/Adriano";

import React from "react";

const headersData = [
    {
        label: 'home',
        href: '/',
        icon: <HomeIcon />
    }, {
        label: 'cv',
        href: '/cv',
        icon: <BusinessIcon />
    }
]

const getHeaderButtons = () => headersData.map(({ label, href, icon }) =>
    <Spring
        key={label}
        from={{ opacity: 0, }}
        to={{ opacity: 1, }}
        config={{ delay: 2000, duration: 2500 }}>
        {props =>
            <div style={props}>
                <div style={style}>
                    <Button {...{
                        key: label,
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                    }}>
                        {icon}
                        {label}
                    </Button>
                </div>
            </div>
        }
    </Spring>
);

export default () =>
    <AppBar position="static">
        <Toolbar><Adriano />{getHeaderButtons()}</Toolbar>
    </AppBar>



const style = {
    color: 'white',
    marginLeft: '0.5rem',
    marginRight: '0.5rem'
}