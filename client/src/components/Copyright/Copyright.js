import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import React from 'react';

export default function Copyright() {
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