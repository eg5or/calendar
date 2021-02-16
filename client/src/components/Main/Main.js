import React from 'react';
import {useStyles} from '../../Hooks/useStyles'
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Calendar from './Calendar/Calendar';
import Copyright from '../Copyright/Copyright';
import Header from '../Header/Header';

const Main = ({logout, firstDay, setFirstDay}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header logout={logout} firstDay={firstDay} setFirstDay={setFirstDay} />
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