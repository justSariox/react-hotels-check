import React from 'react';
import s from './auth-page.module.css';
import {AuthForm} from "../../common/components/authForm/authForm";

export const AuthPage = () => {

    return (
        <div>
            <div className={s.backgroundImage}/>
            <AuthForm/>
        </div>
    );
};
