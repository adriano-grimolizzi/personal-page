import { AppBar, Toolbar, Button } from "@mui/material"
import { Link as RouterLink } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import Adriano from "../../fighetto/title/Adriano";

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
    <Button {...{
        key: label,
        color: "inherit",
        to: href,
        component: RouterLink,
    }}>
        {icon}
        {label}
    </Button>
);

export default () =>
    <AppBar position="static">
        <Toolbar><Adriano />{getHeaderButtons()}</Toolbar>
    </AppBar>
