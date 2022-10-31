import { Typography } from '@mui/material'
import React from 'react'
import NavBar from '../components/header/NavBar'
import Sidebar from '../components/sidebar/Sidebar'

type Props = {}

const Dashboard = (props: Props) => {
    return (
        <React.Fragment>
            <NavBar />
            {/* <Sidebar /> */}
            {/* <Typography variant='h1'>Dashboard</Typography> */}
        </React.Fragment>
    )
}

export default Dashboard