import { AccountCircle, Widgets } from '@mui/icons-material'
import { AppBar, Box, Button, IconButton, List, ListItemButton, ListItemText, Toolbar, Tooltip, Typography, useTheme } from '@mui/material'
import React from 'react'
import { DrawerContext } from '../../contexts/DrawerContext'

const navItems = [
    "Home",
    "About",
    "Pricing",
]

const NavBar = () => {
    const theme = useTheme()
    const drawer = React.useContext(DrawerContext)

    const toggleDrawer = () => {
        drawer?.setOpenDrawer(!drawer.openDrawer)
    }

    return (
        <AppBar
            position='fixed'
            color='transparent'
            sx={{
                borderBottom: '1px solid',
                borderBottomColor: theme.palette.primary.main,
                zIndex: (theme) => theme.zIndex.drawer + 1
            }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box display='flex' alignItems='center' flex={1} sx={{ '&:hover': { color: theme.palette.secondary.main, transform: 'scale(1.1)', transition: '1s ease-in' } }}>
                    <Tooltip title='Options' sx={{ display: { md: 'none' } }}>
                        <IconButton color='primary' size='large' onClick={toggleDrawer}>
                            <Widgets />
                        </IconButton>
                    </Tooltip>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant='h6' fontWeight={900} color='primary' sx={{ display: { xs: 'none', md: 'initial' } }}>360</Typography>
                        &nbsp;
                        <Typography variant='h6'>Strategic</Typography>
                        &nbsp;
                        <Typography variant='h6' fontWeight='bold' color='secondary'>Degree</Typography>
                    </Box>
                </Box>
                <List sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'space-around', flex: 2 }}>
                    {navItems.map((navItem) => (
                        <ListItemButton key={navItem} disableRipple>
                            <ListItemText sx={{ '&:hover': { color: theme.palette.secondary.main, transform: 'scale(1.1)', transition: '1s ease-in' } }}>
                                {navItem}
                            </ListItemText>
                        </ListItemButton>
                    ))}
                </List>
                <Box alignItems='center' justifyContent='space-evenly' flex={1} sx={{ display: { xs: 'none', sm: 'flex' } }}>
                    <Button variant='text' color='primary'>
                        <Typography sx={{ '&:hover': { transform: 'scale(1.1)', transition: '1s ease-in' } }}>Sign Up</Typography>
                    </Button>
                    <Button variant='contained' sx={{ '&:hover': { transform: 'scale(1.1)', transition: '1s ease-in' } }}>
                        <Typography>Sign In</Typography>
                    </Button>
                </Box>
                <IconButton color='secondary' size='large' sx={{ display: { sm: 'none' }, transform: 'scale(1.2)' }}>
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar