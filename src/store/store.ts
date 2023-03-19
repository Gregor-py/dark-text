import { authModalReducer } from "@/store/auth-modal/AuthModalSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: combineReducers({
    authModal: authModalReducer
  }),
  devTools: process.env.NEXT_PUBLIC_ENV === "dev"
});
export type TypeRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
