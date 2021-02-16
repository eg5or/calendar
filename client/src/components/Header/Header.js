import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import {Tooltip} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AppBar from '@material-ui/core/AppBar';


const Header = ({logout, firstDay, setFirstDay}) => {
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

    return <AppBar>
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
}

export default Header