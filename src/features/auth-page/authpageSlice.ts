import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialIsLoggedIn = localStorage.getItem("isLoggedIn") === "true";

const initialState: initialState = {
    isLoggedIn: initialIsLoggedIn,
    user: {
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password")
    }
};

const slice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login: (state, action: PayloadAction<{ email: string; password: string }>) => {
            state.isLoggedIn = true;
            state.user.email = action.payload.email;
            state.user.password = action.payload.password;
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("email", action.payload.email);
            localStorage.setItem("password", action.payload.password);
        },
        logout: (state, action: PayloadAction) => {
            state.isLoggedIn = false;
            state.user.email = "";
            state.user.password = "";
            localStorage.setItem("isLoggedIn", "false");
            localStorage.setItem("email", "");
            localStorage.setItem("password", "");
        }
    }
});

interface initialState {
    isLoggedIn: boolean;
    user: user;
}

interface user {
    email: string | null;
    password: string | null;
}

export const authReducer = slice.reducer;
export const authActions = slice.actions;
