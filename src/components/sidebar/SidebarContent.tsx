import { ArrowDropUp, ArrowDropDown } from '@mui/icons-material';
import { List, ListItem, ListItemButton, ListItemText, useTheme, Grid, Typography, Divider, ListSubheader, Box, Toolbar } from '@mui/material';
import Grow from '@mui/material/Grow';
import ListItemIcon from '@mui/material/ListItemIcon';
import React from 'react'

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

const SidebarContent = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <React.Fragment>
            <Toolbar sx={{ backgroundColor: 'white' }} />
            <Box sx={{ overflow: 'auto' }}>
                <List subheader={<Grid />}>
                    <ListSubheader sx={{ borderRight: '2px solid', borderColor: 'lightgrey' }}>
                        <Grid container spacing={2} marginBottom={2}>
                            <Grid item xs={4}>
                                <img src='360dbslogo.png' alt='Company Logo' style={{ width: '100px', height: '100px', borderBottomRightRadius: '10px', borderTopRightRadius: '10px' }} />
                            </Grid>
                            <Grid item xs={8} alignItems='center' height='100px' display='flex'>
                                <Typography marginLeft={1} fontWeight='bold' textTransform='capitalize'>360 Degrees Business Solutions</Typography>
                            </Grid>
                        </Grid>
                    </ListSubheader>
                    <Divider sx={{ backgroundColor: theme.palette.secondary.main }} />
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
                                        <List sx={{ display: open ? 'initial' : 'none' }}>
                                            {tab.sub_tabs.map(({ sub, link }) => (
                                                <ListItem key={sub}>
                                                    <ListItemButton href={link}>
                                                        <ListItemText>
                                                            {sub}
                                                        </ListItemText>
                                                    </ListItemButton>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Grow>
                                </ListItem>
                            )
                        }
                    })}
                </List>
            </Box>
        </React.Fragment>
    )
}

export default SidebarContent