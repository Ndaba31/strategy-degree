import { Typography } from '@mui/material'
import React from 'react'
import Sidebar from '../components/Sidebar'

type Props = {}

const Dashboard = (props: Props) => {
    return (
        <React.Fragment>
            <Sidebar />
            <Typography variant='h1'>Dashboard</Typography>
        </React.Fragment>
    )
}

export default Dashboard