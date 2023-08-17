import {AnyAction, combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import {authReducer} from "../features/auth-page/authpageSlice";

const rootReducer = combineReducers({
    auth: authReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>

// @ts-ignore
window.store = store;