import { TextField } from '@mui/material'
import Box from '@mui/material/Box/Box'
import React from 'react'
import { Controller } from 'react-hook-form'
import '../../styles/Login.css'

type Props = {
    name: string,
    control: any,
    type: string,
    label: string
}

const Text = ({ name, control, type, label }: Props) => {
    return (
        <Box marginY={2}>
            <Controller
                name={name}
                defaultValue=''
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                    <TextField sx={{ width: { xs: '100%', sm: '90%' } }} className='container' onChange={onChange} name={name} value={value} label={label} type={type} variant='standard' />
                )}
            />
        </Box>
    )
}

export default Text