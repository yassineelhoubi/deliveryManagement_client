import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useFormik, FormikProps } from "formik"
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux"
import { useSelector } from 'react-redux';
import { RootState } from "../../Redux/store";
import * as Yup from "yup"
import { adminLogin } from '../../Redux/services/adminLogin';
import { userData, clearData } from '../../Redux/features/auth/userSlice';



function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Maroc Ship
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

const LoginForm: React.FC = () => {
    const token = useSelector(
        (state: RootState) => state.user.token
      );


    let dispatch = useDispatch()
    // interface FormValues {
    //     email: string;
    //     password: string;
    // }


    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({

            password: Yup.string().min(5, 'Must be 5 characters or more').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required')
        }),
        enableReinitialize: true,
        onSubmit: async (values: any) => {
            await adminLogin(values).then((res) => dispatch(userData({
                token: res.data.token
            }))
            )
            // dispatch(clearData())



        }
    }
    )

    return (
        <ThemeProvider theme={theme}>
            {token}
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        {/* <LockOutlinedIcon /> */}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"

                            autoComplete="email"
                            {...formik.getFieldProps('email')}
                            autoFocus
                        />
                        {formik.touched.email && formik.errors.email ? <div className="text-red-400 ">{formik.errors.email}</div> : null}
                        <TextField
                            margin="normal"
                            required
                            fullWidth

                            label="Password"
                            type="password"
                            id="password"
                            {...formik.getFieldProps('password')}
                            autoComplete="current-password"
                        />
                        {formik.touched.password && formik.errors.password ? <div className="text-red-400 ">{formik.errors.password}</div> : null}
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}
export default LoginForm

function userFormik() {
    throw new Error('Function not implemented.');
}
