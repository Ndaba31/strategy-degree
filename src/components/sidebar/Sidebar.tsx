import { Drawer } from '@mui/material';
import React from 'react'
import { DrawerContext } from '../../contexts/DrawerContext';
import SidebarContent from './SidebarContent';

const drawerWidth = 300;

const Sidebar = () => {
    const drawer = React.useContext(DrawerContext)

    return (
        <React.Fragment>
            <Drawer
                variant='permanent'
                anchor='left'
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    display: {
                        xs: 'none',
                        md: 'initial'
                    },
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        border: 'none',
                        // backgroundColor: '#E3C9D7',
                        backgroundColor: 'lightgrey',
                    },
                }}
            >
                <SidebarContent />
            </Drawer>
            <Drawer
                anchor='left'
                open={drawer?.openDrawer}
                onClose={() => { drawer?.setOpenDrawer(false) }}
                // onOpen={openDrawer}
                sx={{
                    width: drawerWidth - 20,
                    flexShrink: 0,
                    display: {
                        md: 'none'
                    },
                    '& .MuiDrawer-paper': {
                        width: drawerWidth - 20,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <SidebarContent />
            </Drawer>
        </React.Fragment>
    )
}

export default Sidebar