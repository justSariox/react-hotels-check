import React, {useEffect} from 'react';
import {AppBar, Box, Button, Icon, IconButton, Toolbar, Typography} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {authActions} from "../../../features/auth-page/authpageSlice";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {isLoggedIn} from "../../../features/auth-page/authpageSelectors";

export const Header = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector(isLoggedIn)

    useEffect(() => {
        if (!isAuth) navigate('/sign-in')
    }, [isAuth]);
    const logoutHandler = () => {
        dispatch(authActions.logout())

    }

    return (
            <AppBar position="static" elevation={0}>
                <Toolbar sx={{backgroundColor: '#f4f4f4', }}>
                    <Typography variant={"h6"} component={"div"} sx={{ flexGrow: 1, color: '#424242', marginLeft: 'auto' }}>
                        Simple Hotel Check
                    </Typography>
                    <IconButton onClick={logoutHandler}>
                        <Typography variant={"body2"}>Выйти</Typography>
                        <LogoutIcon sx={{marginLeft: '12px'}}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
    );
};

