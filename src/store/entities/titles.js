import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";

// TMDB credentials
const { REACT_APP_TMDB_KEY } = process.env;

// fetch titles
export const fetchTitles = createAsyncThunk(
  "titles/fetchTitles",
  async ({ media_type, category, page }) => {
    const TITLES_PATH = `https://api.themoviedb.org/3/${media_type}/${category}?api_key=${REACT_APP_TMDB_KEY}&page=${
      !page ? 1 : page
    }`;
    try {
      const response = await Axios.get(TITLES_PATH);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const searchTitles = createAsyncThunk(
  "titles/searchTitles",
  async ({ searchQuery, page }) => {
    const SEARCH_TITLES_PATH = `https://api.themoviedb.org/3/search/multi?query=${searchQuery}&api_key=${REACT_APP_TMDB_KEY}&language=en-US&page=${
      !page ? 1 : page
    }&include_adult=false`;

    try {
      const response = await Axios.get(SEARCH_TITLES_PATH);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

// fetch title detalis
export const fetchTitleDetails = createAsyncThunk(
  "titles/fetchTitleDetails",
  async ({ id, media_type }) => {
    const DETAILS_PATH = `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${REACT_APP_TMDB_KEY}`;
    const response = await Axios.get(DETAILS_PATH);
    return response.data;
  }
);

const titlesSlice = createSlice({
  name: "titlesSlice",
  initialState: {
    titles: {
      loading: true,
    },
    currentTitle: {
      loading: true,
    },
  },
  reducers: {
    clearCurrentTitle: (state) => {
      state.currentTitle = { loading: true };
    },
  },
  extraReducers: {
    // titles reducer
    [fetchTitles.pending]: (state) => {
      state.titles.loading = true;
    },
    [fetchTitles.fulfilled]: (state, action) => {
      state.titles = { loading: false, ...action.payload };
    },
    [fetchTitles.rejected]: (state, action) => {
      state.titles = {
        loading: false,
        error: action.payload,
      };
    },
    // search titles reducer
    [searchTitles.pending]: (state) => {
      state.titles.loading = true;
    },
    [searchTitles.fulfilled]: (state, action) => {
      state.titles = { loading: false, ...action.payload };
    },
    [searchTitles.rejected]: (state, action) => {
      state.titles = {
        loading: false,
        error: action.payload,
      };
    },
    // current title reducers
    [fetchTitleDetails.pending]: (state) => {
      state.currentTitle.loading = true;
    },
    [fetchTitleDetails.fulfilled]: (state, action) => {
      state.currentTitle = { loading: false, ...action.payload };
    },
    [fetchTitleDetails.rejected]: (state, action) => {
      state.currentTitle = {
        loading: false,
        error: action.payload,
      };
    },
  },
});

// export actions
export const { clearCurrentTitle } = titlesSlice.actions;

// selectors
export const titlesSelector = ({ titlesSlice }) => titlesSlice.titles;
export const titleDetailsSelector = ({ titlesSlice }) =>
  titlesSlice.currentTitle;

// export reducer
export default titlesSlice.reducer;
