import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { get } from "../api";

export const getData = createAsyncThunk("get", async (_, thunkAPI) => {
  try {
    const data = await get("/greeting.json");
    return data.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Something went wrong");
  }
});

const greetingSlice = createSlice({
  name: "greetings",
  initialState: {
    error: null,
    greetings: [],
    greeting: null,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getData.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getData.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      greeting: action.payload,
    }));
    builder.addCase(getData.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }));
  },
});

export default greetingSlice.reducer;
