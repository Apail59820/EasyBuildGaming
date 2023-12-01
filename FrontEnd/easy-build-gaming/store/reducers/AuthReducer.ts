import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppState} from "../store";

export interface AuthState {
    authState: boolean;
}

const initialState: AuthState = {
    authState: false,
};

const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthState(state: AuthState, action: PayloadAction<boolean>) {
            state.authState = action.payload;
        },
    },
});

export const { setAuthState } = authReducer.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export default authReducer.reducer;