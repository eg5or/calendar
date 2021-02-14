import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Tooltip} from '@material-ui/core';
import Calendar from './Calendar/Calendar';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © Calendarchik by '}
            <Link color="inherit" href="https://github.com/eg5or/calendar">
                eg5or
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

const Main = ({logout, firstDay, setFirstDay}) => {
    const classes = useStyles();
    const today = new Date()
    const goToNextOrPreviousDay = (direction) => {
        let newDate = null
        switch (direction) {
            case 'right':
                newDate = new Date(firstDay.setDate(firstDay.getDate() + 1))
                break
            case 'left':
                newDate = new Date(firstDay.setDate(firstDay.getDate() - 1))
                break
            default:
                break
        }
        setFirstDay(newDate)
    }
    console.log(firstDay)
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar>
                <Toolbar>
                    <div className="header">
                        <div className="header-container">
                            <div className="leftHeaderButton">
                                <Tooltip title="Листать назад" placement="bottom">
                                    <IconButton onClick={() => {goToNextOrPreviousDay('left')}} color="inherit">
                                        <NavigateBeforeIcon/>
                                    </IconButton>
                                </Tooltip>
                            </div>
                            <div className="logo">
                                <div className="logo__first">Calendar</div>
                                <div className="logo__second">chik</div>
                                <div className="logo__third">{today.getFullYear()}</div>
                            </div>
                            <div className="rightHeaderButton">
                                <Tooltip title="Листать вперед" placement="bottom">
                                    <IconButton onClick={() => {goToNextOrPreviousDay('right')}} color="inherit">
                                        <NavigateNextIcon/>
                                    </IconButton>
                                </Tooltip>
                            </div>
                        </div>
                        <Tooltip title="Выход" placement="bottom">
                            <IconButton onClick={logout} color="inherit">
                                <ExitToAppIcon/>
                            </IconButton>
                        </Tooltip>
                    </div>
                </Toolbar>
            </AppBar>

            <main className={classes.content}>
                <Container maxWidth="lg" className={classes.container}>
                    <Calendar firstDay={firstDay}/>
                    <Box pt={4}>
                        <Copyright/>
                    </Box>
                </Container>
            </main>
        </div>
    );
}

export default Main