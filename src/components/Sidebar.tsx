import { ArrowDropUp, ArrowDropDown } from '@mui/icons-material';
import { Drawer, List, ListItem, ListItemButton, ListItemText, MenuItem, MenuList, useTheme, Grid, Typography, Divider, Toolbar } from '@mui/material';
import Grow from '@mui/material/Grow';
import ListItemIcon from '@mui/material/ListItemIcon';
import React from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {
}

const drawerWidth = 300;

const tabs = [
    {
        tab: 'Dashboard',
        link: 'dashboard'
    },
    {
        tab: 'Company',
        link: 'company'
    },
    {
        tab: 'Strategy Development',
        sub_tabs: [
            {
                sub: 'SWOT Analysis',
                link: 'swot-analysis'
            },
            {
                sub: 'Vision and Mission',
                link: 'statements'
            },
            {
                sub: 'Core Values',
                link: 'core-values'
            },
            {
                sub: 'Key Focus Areas',
                link: 'key-focus-areas'
            },
            {
                sub: 'Stakeholder Analysis',
                link: 'stakeholder-analysis'
            },
            {
                sub: 'Risk Management',
                link: 'risk-management'
            },
        ]
    },
    {
        tab: 'Profile',
        link: 'profile'
    },
    {
        tab: 'Logout',
        link: '/'
    }
]

const Sidebar = () => {
    const theme = useTheme();
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <Drawer
            variant='permanent'
            anchor='left'
            sx={{
                width: drawerWidth,
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
            <Grid container spacing={2} marginBottom={2}>
                <Grid item xs={4}>
                    <img src='360dbslogo.png' alt='Company Logo' style={{ width: '100px', height: '100px', borderBottomRightRadius: '10px', borderTopRightRadius: '10px' }} />
                </Grid>
                <Grid item xs={8} alignItems='center' height='100px' display='flex'>
                    <Typography marginLeft={1} fontWeight='bold' textTransform='capitalize'>360 Degrees Business Solutions</Typography>
                </Grid>
            </Grid>
            <Divider sx={{ backgroundColor: theme.palette.secondary.main }} />
            <List>
                {tabs.map((tab, index) => {
                    if (tab.sub_tabs === undefined) {
                        return (
                            <ListItem key={index}>
                                <ListItemButton href={tab.link} divider>
                                    <ListItemText>
                                        {tab.tab}
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        )
                    } else {
                        return (
                            <ListItem key={index} sx={{ display: 'block' }}>
                                <ListItemButton
                                    onClick={handleToggle}
                                    divider
                                >
                                    <ListItemText>
                                        {tab.tab}
                                    </ListItemText>
                                    <ListItemIcon>
                                        {open ? <ArrowDropUp /> : <ArrowDropDown />}
                                    </ListItemIcon>
                                </ListItemButton>
                                <Grow
                                    in={open}
                                    {...(open ? { timeout: 1000 } : {})}
                                >
                                    <MenuList sx={{ display: open ? 'initial' : 'none' }}>
                                        {tab.sub_tabs.map(({ sub, link }) => (
                                            <MenuItem key={sub} onClick={() => navigate(link)}>
                                                {sub}
                                            </MenuItem>
                                        ))}
                                    </MenuList>
                                </Grow>
                            </ListItem>
                        )
                    }
                })}
            </List>
        </Drawer>
    )
}

export default Sidebar