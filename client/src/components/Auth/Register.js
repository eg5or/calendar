import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {NavLink} from 'react-router-dom';
import {useFormik} from 'formik';
import {Alert} from '@material-ui/lab';
import {login} from '../../redux/authReducer';

const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://github.com/eg5or/calendar">
                Calendar
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Register = (props) => {
    const classes = useStyles();
    // -----------------------------------------------------------------------------------------------------------------
    // Formik
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        }
    });


    const validateEmail = (email) => {
        const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        return reg.test(email)
    }

    const onRegister = () => {
        if (formik.values.password.length < 10) {
            props.setResponseMessage('Пароль должен быть не менее 10 символов', 'warning')
        } else if (!validateEmail(formik.values.email)) {
            props.setResponseMessage('Введен некорректный Email!', 'warning')
        } else {
                props.register(formik.values.name, formik.values.email, formik.values.password)
            }
        }
    // Validations

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Зарегистрироваться
                </Typography>
                <form className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                id="name"
                                label="Как вас зовут?"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={formik.handleChange}
                                value={formik.values.email}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Введите ваш Email"
                                name="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField

                                onChange={formik.handleChange}
                                value={formik.values.password}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Пароль"
                                type="password"
                                id="password"
                            />
                        </Grid>
                    </Grid>
                    <Grid Grid container spacing={2} justify="center">
                        <Grid item xs={12}>
                            {props.textResponseMessage && <Alert severity={props.typeResponseMessage}>{props.textResponseMessage}</Alert>}
                        </Grid>
                    </Grid>
                    <Button
                        disabled={formik.values.email.length === 0 || formik.values.password.length === 0 || formik.values.name.length === 0}
                        onClick={onRegister}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Зарегистрироваться
                    </Button>
                    <Grid container justify="center">
                        <Grid item>
                            <NavLink to={'/login'}>
                                Уже есть аккаунт? Тогда перейдите на страницу входа
                            </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}

export default Register