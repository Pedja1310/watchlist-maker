import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'userSlice',
	initialState: {
		user: {},
		isUserLoggedIn: false,
		userTitles: {
			watchlist: [],
			watchedTitles: []
		}
	},
	reducers: {
		signup: (state, action) => {
			state.user = { ...action.payload }
			state.isUserLoggedIn = true
		},
		login: (state, action) => {
			state.user = { ...action.payload }
			state.isUserLoggedIn = true
		},
		logout: (state) => {
			state.user = {}
			state.isUserLoggedIn = false
		}
	}
})

// export actions
export const { signup, login, logout } = userSlice.actions

// selectors
export const userSelector = ({ userSlice }) => userSlice.user
export const isUserLoggedIn = ({ userSlice }) => userSlice.isUserLoggedIn

// export reducer
export default userSlice.reducer
