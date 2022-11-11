import { Box, CssBaseline, Toolbar } from '@mui/material'
import React from 'react'
import DrawerContextProvider from '../../contexts/DrawerContext'
import NavBar from '../header/NavBar'
import Sidebar from '../sidebar/Sidebar'

type Props = {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <DrawerContextProvider>
            <Box display='flex'>
                <CssBaseline />
                <NavBar />
                <Sidebar />
                <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    {children}
                </Box>
            </Box>
        </DrawerContextProvider>
    )
}

export default Layout