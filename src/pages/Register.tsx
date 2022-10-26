import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import Text from '../components/form/Text'
import { User } from '../interfaces/User'

type Props = {}

const Register = (props: Props) => {
    const { handleSubmit, reset, control } = useForm<User>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<User> = (data) => {
        console.log(data);
        reset();
        navigate('/');
    }

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
                        Create an account
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: 10 }}>
                        <Box display='flex' flexDirection='column'>
                            <Box sx={{ display: { sm: 'flex' }, justifyContent: { sm: 'space-between' }, width: '100%' }}>
                                <Text name='first_name' control={control} type='text' label='First Name' />
                                <Text name='last_name' control={control} type='text' label='Last Name' />
                            </Box>
                            <Box sx={{ display: { sm: 'flex' }, justifyContent: { sm: 'space-between' }, width: '100%' }}>
                                <Text name='email' control={control} type='email' label='Email' />
                                <Text name='phone' control={control} type='number' label='Cell Number' />
                            </Box>
                            <Box sx={{ display: { sm: 'flex' }, justifyContent: { sm: 'space-between' }, width: '100%' }}>
                                <Text name='residence' control={control} type='text' label='Residence' />
                                <Text name='position' control={control} type='text' label='Job Title' />
                            </Box>
                            <Box sx={{ display: { sm: 'flex' }, justifyContent: { sm: 'space-between' }, width: '100%' }}>
                                <Text name='password' control={control} type='password' label='Password' />
                                <Text name='password2' control={control} type='password' label='Confirm Password' />
                            </Box>
                        </Box>
                        <Box display='flex' justifyContent='space-between' alignItems='center'>
                            <Button type='submit' variant='contained'>Sign Up</Button>
                            <Link to='/login' className='links'>Login to account</Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Register