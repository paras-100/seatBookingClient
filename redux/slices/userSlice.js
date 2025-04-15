import { createSlice } from "@reduxjs/toolkit";
import {
  bookSeats,
  getSeatsData,
  loginUser,
  resetSeats,
  signupUser,
} from "../thunks/userThunk";

const initialState = {
  seatsData: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    redResetBookedSeats: (state) => {
      return { ...state, bookedSeats: null };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signupUser.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(signupUser.fulfilled, (state, action) => {
      if (action.payload.err) {
        return {
          ...state,
          loading: false,
          error: action.payload,
          userDetails: null,
        };
      } else {
        return {
          ...state,
          loading: false,
          error: null,
          userDetails: action.payload,
        };
      }
    });

    builder.addCase(loginUser.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload.err) {
        return {
          ...state,
          loading: false,
          error: action.payload,
          userDetails: null,
        };
      } else {
        return {
          ...state,
          loading: false,
          error: null,
          userDetails: action.payload,
        };
      }
    });

    builder.addCase(getSeatsData.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(getSeatsData.fulfilled, (state, action) => {
      if (action.payload.err) {
        return {
          ...state,
          loading: false,
          error: action.payload,
          seatsData: null,
        };
      } else {
        return {
          ...state,
          loading: false,
          error: null,
          seatsData: action.payload,
        };
      }
    });

    builder.addCase(bookSeats.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(bookSeats.fulfilled, (state, action) => {
      if (action.payload.err) {
        return {
          ...state,
          loading: false,
          error: action.payload,
          bookedSeats: null,
        };
      } else {
        return {
          ...state,
          loading: false,
          error: null,
          bookedSeats: action.payload,
        };
      }
    });

    builder.addCase(resetSeats.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(resetSeats.fulfilled, (state, action) => {
      if (action.payload.err) {
        return {
          ...state,
          loading: false,
          error: action.payload,
          bookedSeats: null,
        };
      } else {
        return {
          ...state,
          loading: false,
          error: null,
          bookedSeats: action.payload,
        };
      }
    });
  },
});

export const { redResetBookedSeats } = userSlice.actions;
