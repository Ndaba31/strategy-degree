import { Drawer, useTheme, SwipeableDrawer } from '@mui/material';
import React from 'react'
import SidebarContent from './SidebarContent';

const drawerWidth = 300;

const Sidebar = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    return (
        <React.Fragment>
            <Drawer
                variant='permanent'
                anchor='left'
                sx={{
                    width: drawerWidth,
                    display: {
                        xs: 'none',
                        md: 'initial'
                    },
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        border: '3px solid',
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                        // backgroundColor: '#E3C9D7',
                        backgroundColor: 'lightgrey',
                        borderColor: theme.palette.primary.main,
                    },
                }}
            >
                <SidebarContent />
            </Drawer>
            <SwipeableDrawer
                anchor='left'
                open={open}
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                sx={{
                    width: drawerWidth - 20,
                    display: {
                        md: 'none'
                    },
                    '& .MuiDrawer-paper': {
                        width: drawerWidth - 20,
                        boxSizing: 'border-box',
                        border: '3px solid',
                        borderTopRightRadius: 10,
                        borderBottomRightRadius: 10,
                        // backgroundColor: '#E3C9D7',
                        backgroundColor: 'lightgrey',
                        borderColor: theme.palette.primary.main,
                    },
                }}
            >
                <SidebarContent />
            </SwipeableDrawer>
        </React.Fragment>
    )
}

export default Sidebar