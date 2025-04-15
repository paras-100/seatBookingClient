// Library Import
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API =
  process.env.NEXT_SERVER_CON || "https://seatbookingserver.onrender.com";

export const signupUser = createAsyncThunk(
  "signupUser",
  async (userDetails) => {
    try {
      const { data } = await axios.post(`${API}/api/user/signup`, userDetails);

      return data;
    } catch (err) {
      return {
        err:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      };
    }
  }
);

export const loginUser = createAsyncThunk("loginUser", async (userDetails) => {
  try {
    const { data } = await axios.post(`${API}/api/user/login`, userDetails);

    return data;
  } catch (err) {
    return {
      err:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    };
  }
});

export const getSeatsData = createAsyncThunk("getSeatsData", async () => {
  try {
    const { data } = await axios.get(`${API}/api/user/getSeatsData`);

    return data;
  } catch (err) {
    return {
      err:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    };
  }
});

export const bookSeats = createAsyncThunk("bookSeats", async (numSeats) => {
  try {
    const { data } = await axios.put(`${API}/api/user/bookSeats`, {
      numSeats,
    });

    return data;
  } catch (err) {
    return {
      err:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    };
  }
});

export const resetSeats = createAsyncThunk("resetSeats", async () => {
  try {
    const { data } = await axios.put(`${API}/api/user/resetSeats`);

    return data;
  } catch (err) {
    return {
      err:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    };
  }
});
