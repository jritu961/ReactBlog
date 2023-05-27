import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

const initialState: any = [];
const counterSlice = createSlice({
  name: "signup",
  initialState,

  reducers: {
    combine: (state: any, action: PayloadAction<any>) => {
      //state=action.payload
      //  state = [...state, action.payload];
      state.push(action.payload);
    },
  },
});

export const { combine } = counterSlice.actions;

export const reducerFns = counterSlice.reducer;
