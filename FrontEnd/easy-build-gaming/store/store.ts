import { configureStore } from "@reduxjs/toolkit"
import authReducer, {AuthState} from "./reducers/AuthReducer";

export type AppState = {
    auth: AuthState;
};

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
})