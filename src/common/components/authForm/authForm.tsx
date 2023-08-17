import React, {useEffect} from 'react';
import { Button, Card, TextField, Typography } from "@mui/material";
import s from './authForm.module.css';
import { useForm } from "react-hook-form";
import {z} from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {authActions} from "../../../features/auth-page/authpageSlice";
import {useSelector} from "react-redux";
import {isLoggedIn} from "../../../features/auth-page/authpageSelectors";
import {useNavigate} from "react-router-dom";


type FormValues = {
    email: string;
    password: string;
};

const loginSchema = z.object({
    email: z.string().email({message: 'Некорректный эмейл'}),
    password: z
        .string()
        .min(8, {message: 'Пароль должен содержать больше 8 символов'})
        .regex(/^[^\u0400-\u04FF]+$/,{message: 'Кириллические символы не допустимы'}),
})
export const AuthForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const isAuth = useSelector(isLoggedIn)

    useEffect(() => {
        isAuth && navigate('/')
    }, [isAuth]);

    const { register, handleSubmit, formState: {errors},  } = useForm<FormValues>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = (data: FormValues) => {
        const {email, password} = data
        dispatch(authActions.login({email, password}))
    };

    return (
            <div className={s.auth}>
                <Card sx={{ borderRadius: '16px', padding: '32px', width: '410px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                    <Typography variant={'h5'}>Simple Hotel Check</Typography>
                    <form className={s.authForm} onSubmit={handleSubmit(onSubmit)}>
                        <div className={s.textfield}>
                            <Typography variant={'subtitle1'}>Логин</Typography>
                            <TextField fullWidth {...register('email')} error={!!errors.email?.message}/>
                            {errors.email?.message && <Typography variant={"caption"}>{errors.email.message}</Typography>}
                        </div>
                        <div className={s.textfield}>
                            <Typography variant={'subtitle1'}>Пароль</Typography>
                            <TextField fullWidth {...register('password')} error={!!errors.password?.message}/>
                            {errors.password?.message && <Typography variant={"caption"}>{errors.password.message}</Typography>}
                        </div>
                        <Button sx={{ height: '50px' }} variant={"contained"} fullWidth type="submit">Войти</Button>
                    </form>
                </Card>
            </div>
    );
};
