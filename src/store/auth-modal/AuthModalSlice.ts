import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthModalSliceState {
  isOpen: boolean;
  view: "login" | "signup" | "resetPassword";
}

const initialState: AuthModalSliceState = {
  isOpen: false,
  view: "login"
};

export const authModalSlice = createSlice({
  name: "auth-modal",
  initialState,

  reducers: {
    setView: (
      state,
      action: PayloadAction<"login" | "signup" | "resetPassword">
    ) => {
      state.view = action.payload;
    },
    setIsOpen: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    }
  }
});

export const { setView, setIsOpen } = authModalSlice.actions;
export const authModalReducer = authModalSlice.reducer;
