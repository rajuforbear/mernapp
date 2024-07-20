import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  goals: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
const goalSlice = createSlice({
  name: "goal",
  initialState,
  reset: (state) => {
    return {
      ...state,
      isLoading: false,
      isError: false,
      isSuccess: false,
      message: "",
    };
  },
  extraReducers: (builder) => {},
});
export const { reset } = goalSlice.actions;
export default goalSlice.reducer;
