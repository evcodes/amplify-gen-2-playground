import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

import {Link} from "react-router-dom";

type Anchor = 'left'

export default function DrawerNavigation() {
    const [state, setState] = React.useState({
        left: false
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({...state, [anchor]: open});
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{width: 250}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem key={"customers"} disablePadding>

                    <ListItemButton>
                        <Link to={"/customers"}>
                            <ListItemText primary={"Customers"}/>
                        </Link>
                    </ListItemButton>

                </ListItem>
                <ListItem key={"payments"} disablePadding>
                    <Link to ={"/payments"}>
                        <ListItemButton>

                            <ListItemText primary={"Payments"}/>
                        </ListItemButton>
                    </Link>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>
                        <p>Menu</p>
                        <MenuIcon/>
                    </Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}
