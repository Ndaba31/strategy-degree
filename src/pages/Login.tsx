import { Grid, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import Text from '../components/form/Text';

type Props = {}

interface LoginInputs {
    email: string
    password: string
}

const Login = (props: Props) => {
    const { handleSubmit, reset, control } = useForm<LoginInputs>();

    const onSubmit: SubmitHandler<LoginInputs> = (data) => { console.log(data); reset() }

    return (
        <Grid
            container
            spacing={2}
            sx={{
                height: '100vh',
                padding: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <Grid
                item xs={12}
                sm={6}
                sx={{
                    backgroundImage: 'url("360dbslogo.png")',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: {
                        xs: 'top center',
                        sm: 'center'
                    },
                    height: {
                        xs: '30%',
                        sm: '100%'
                    },
                    width: '100%'
                }}>
            </Grid>
            <Grid
                item xs={12}
                sm={6}
                width='100%'
                sx={{
                    minHeight: {
                        xs: '70%',
                        sm: '100%'
                    },
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: {
                        sm: 'center'
                    }
                }}
            >
                <Box sx={{ width: { xs: '100%', md: '80%' } }}>
                    <Typography
                        variant='h5'
                        fontWeight={900}
                        // color='primary'
                        textTransform='capitalize'>
                        Login to your account
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: 10 }}>
                        <Box display='flex' flexDirection='column'>
                            <Text name='email' control={control} type='email' label='Email' />
                            <Text name='password' control={control} type='password' label='Password' />
                        </Box>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Button type='submit' variant='contained'>Login</Button>
                            <Link to='/sign-up' className='links'>Create an account</Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Login